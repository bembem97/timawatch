import { MediaListProps } from "~/types/data/media"
import { MediaPostersProps } from "~/types/destructured/mediaPoster"

export default function mediaDestructuring(
    data: PromiseSettledResult<MediaListProps>
): MediaPostersProps | undefined {
    if ("status" in data && data.status === "rejected") {
        return
    }

    const results = data.value.results.map(
        ({ id, title, name, first_air_date, media_type, poster_path, release_date, vote_average }) => ({
            first_air_date,
            id,
            name,
            poster_path,
            media_type,
            release_date,
            title,
            vote_average,
        })
    )

    return { ...data.value, results }
}
