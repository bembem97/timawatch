import { MediaListProps } from "./data/media"

export interface DiscoverDataProps extends MediaListProps {
    dates?: {
        maximum: string
        minimum: string
    }
}
