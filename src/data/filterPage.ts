import { API_URL } from "~/constants/misc"
import fetcher from "~/functions/fetcher"
import { MediaCertificationsDataProps, MediaCertificationsProps } from "~/types/data/mediaCertifications"
import { MediaListProps, MediaProps } from "~/types/data/media"
import { WatchRegionDataProps, WatchRegionProps } from "~/types/data/watchRegion"
import { MediaGenreDataProps, MediaGenreProps } from "~/types/data/mediaGenres"
import { LanguagesDataProps, LanguagesProps } from "~/types/data/languages"
import getCountryCode from "../functions/getCountryCode"
import { FilterToolsProps } from "~/types/destructured/filterSearch"
import advanceDateTo from "~/functions/advanceDateTo"
import getDate from "~/functions/getDate"
import { DiscoverDataProps } from "~/types/discover"

const SECRET = process.env.API_SECRET

type PromisedData = [
    PromiseSettledResult<WatchRegionDataProps>,
    PromiseSettledResult<MediaGenreDataProps>,
    PromiseSettledResult<MediaCertificationsDataProps>,
    PromiseSettledResult<LanguagesDataProps>,
    PromiseSettledResult<DiscoverDataProps>
]

export default async function filterSearch(media: MediaProps["media_type"], status: string) {
    const country_code = await getCountryCode()

    const awaitWatchRegion = fetcher(`${API_URL}watch/providers/regions?language=en-US&api_key=${SECRET}`)
    const awaitGenres = fetcher(`${API_URL}genre/${media}/list?language=en&api_key=${SECRET}`)
    const awaitCertifications = fetcher(`${API_URL}certification/movie/list?api_key=${SECRET}`)
    const awaitLanguages = fetcher(`${API_URL}configuration/languages?api_key=${SECRET}`)
    const awaitGetDates = fetcher(
        `${API_URL}${media}/${status.replace(/-/g, "_")}?api_key=${SECRET}&language=en-US&page=1`
    )

    // const awaitGetDates = fetcher(`/api/discover?media=${media}&status=${status.replace(/-/g, "_")}`)

    const [watchRegion, genres, certifications, languages, getDates]: PromisedData = await Promise.allSettled(
        [awaitWatchRegion, awaitGenres, awaitCertifications, awaitLanguages, awaitGetDates]
    )

    let WATCH_REGION: undefined | WatchRegionProps[] = undefined
    let GENRES: undefined | MediaGenreProps[] = undefined
    let CERTIFICATIONS: undefined | MediaCertificationsProps[] = undefined
    let LANGUAGES: undefined | LanguagesProps[] = undefined
    let GET_DATES: undefined | DiscoverDataProps["dates"] = undefined

    if ("status" in watchRegion && watchRegion.status === "fulfilled") {
        WATCH_REGION = watchRegion.value.results
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

    if ("status" in getDates && getDates.status === "fulfilled") {
        const dates = getDates.value.dates

        const withMaxDate = dates ? dates.maximum : getDate(advanceDateTo())
        const withMinDate = dates ? dates.minimum : ""

        GET_DATES = {
            maximum: withMaxDate,
            minimum: withMinDate,
        }
    }

    const results: FilterToolsProps["filters"] = {
        dates: {
            maximum: GET_DATES?.maximum ?? getDate(advanceDateTo()),
            minimum: GET_DATES?.minimum ?? "",
        },
        country_code,
        watchRegion: {
            regions: WATCH_REGION?.map(({ english_name, iso_3166_1 }) => ({ english_name, iso_3166_1 })),
        },
        genres: GENRES?.map(({ id, name }) => ({ id, name })),
        certifications: CERTIFICATIONS?.map(({ certification }) => certification),
        languages: LANGUAGES?.map(({ english_name, iso_639_1 }) => ({ english_name, iso_639_1 })),
    }

    return results
}
