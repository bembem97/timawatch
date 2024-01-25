import { API_URL } from "~/constants/misc"
import fetcher from "~/functions/fetcher"
import { MediaCertificationsDataProps, MediaCertificationsProps } from "~/types/data/mediaCertifications"
import { MediaProps } from "~/types/data/media"
import { WatchRegionDataProps, WatchRegionProps } from "~/types/data/watchRegion"
import { MediaWatchProvidersDataProps, MediaWatchProvidersProps } from "~/types/data/mediaWatchProvider"
import { MediaGenreDataProps, MediaGenreProps } from "~/types/data/mediaGenres"
import { LanguagesDataProps, LanguagesProps } from "~/types/data/languages"
import getCountryCode from "../functions/getCountryCode"
import { FilterToolsProps } from "~/types/destructured/filterSearch"

const SECRET = process.env.API_SECRET

type PromisedData = [
    PromiseSettledResult<WatchRegionDataProps>,
    PromiseSettledResult<MediaWatchProvidersDataProps>,
    PromiseSettledResult<MediaGenreDataProps>,
    PromiseSettledResult<MediaCertificationsDataProps>,
    PromiseSettledResult<LanguagesDataProps>
]

export default async function filterSearch(media: MediaProps["media_type"]) {
    // const { country_code } = await fetcher("https://ipapi.co/json")
    const country_code = await getCountryCode()

    const awaitWatchRegion = fetcher(`${API_URL}watch/providers/regions?language=en-US&api_key=${SECRET}`)
    const awaitWatchProviders = fetcher(
        `${API_URL}watch/providers/${media}?language=en-US&watch_region=${country_code}&api_key=${SECRET}`
    )
    const awaitGenres = fetcher(`${API_URL}genre/${media}/list?language=en&api_key=${SECRET}`)
    const awaitCertifications = fetcher(`${API_URL}certification/movie/list?api_key=${SECRET}`)
    const awaitLanguages = fetcher(`${API_URL}configuration/languages?api_key=${SECRET}`)

    const [watchRegion, watchProviders, genres, certifications, languages]: PromisedData =
        await Promise.allSettled([
            awaitWatchRegion,
            awaitWatchProviders,
            awaitGenres,
            awaitCertifications,
            awaitLanguages,
        ])

    let WATCH_REGION: undefined | WatchRegionProps[] = undefined
    let WATCH_PROVIDERS: undefined | MediaWatchProvidersProps[] = undefined
    let GENRES: undefined | MediaGenreProps[] = undefined
    let CERTIFICATIONS: undefined | MediaCertificationsProps[] = undefined
    let LANGUAGES: undefined | LanguagesProps[] = undefined

    if ("status" in watchRegion && watchRegion.status === "fulfilled") {
        WATCH_REGION = watchRegion.value.results
    }

    if ("status" in watchProviders && watchProviders.status === "fulfilled") {
        WATCH_PROVIDERS = watchProviders.value.results
    }

    if ("status" in genres && genres.status === "fulfilled") {
        GENRES = genres.value.genres
    }

    if ("status" in certifications && certifications.status === "fulfilled") {
        CERTIFICATIONS = certifications.value.certifications[country_code]
    }

    if ("status" in languages && languages.status === "fulfilled") {
        LANGUAGES = languages.value
    }

    const results: FilterToolsProps["filters"] = {
        country_code,
        watchRegion: {
            regions: WATCH_REGION?.map(({ english_name, iso_3166_1 }) => ({ english_name, iso_3166_1 })),
        },
        genres: GENRES?.map(({ id, name }) => ({ id, name })),
        certifications: CERTIFICATIONS?.map(({ certification }) => ({ certification })),
        languages: LANGUAGES?.map(({ english_name, iso_639_1 }) => ({ english_name, iso_639_1 })),
    }

    return results
}
