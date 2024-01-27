import { WatchRegionsProps } from "~/components/view/FilterSearch/Tools/WatchRegions"
import { MediaProps } from "../data/media"
import { WatchProvidersProps } from "~/components/view/FilterSearch/Tools/WatchProviders"

type WatchRegionProps = {
    english_name: string
    iso_3166_1: string
}

export type FilterWatchRegionsProps = {
    regions: WatchRegionProps[] | undefined
}

export type FilterGenresProps = {
    id: number
    name: string
}

export type FilterCertificationsProps = string

export type FilterLanguagesProps = {
    english_name: string
    iso_639_1: string
}

export type FilterToolsProps = {
    sortBy: string
    mediaType: MediaProps["media_type"]
    filters: {
        dates: { maximum: string; minimum: string | undefined }
        country_code: string
        watchRegion: FilterWatchRegionsProps
        genres: FilterGenresProps[] | undefined
        certifications: FilterCertificationsProps[] | undefined
        languages: FilterLanguagesProps[] | undefined
    }
}
