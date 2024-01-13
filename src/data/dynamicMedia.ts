import fetcher from "~/functions/fetcher"
import { MediaProps } from "~/types/data/media"
import { MediaImageDataProps, MediaImageProps } from "~/types/data/mediaImages"
import { ReviewDataProps } from "~/types/data/mediaReviews"
import { MediaVideosDataProps } from "~/types/data/mediaVideos"
import { MovieCreditsProps } from "~/types/data/movieCredits"
import { MovieDetailsProps } from "~/types/data/movieDetails"
import { TvAggrCreditsProps } from "~/types/data/tvAggregateCredits"
import { TvDetailsProps } from "~/types/data/tvDetails"

type DynamicMediaProps = {
    media: MediaProps["media_type"]
    id: string
}

type AppendedMovieDetailsProps = MovieDetailsProps & {
    credits: MovieCreditsProps
    reviews: ReviewDataProps
    images: Omit<MediaImageDataProps, "id">
    videos: Omit<MediaVideosDataProps, "id">
}
type AppendedTvDetailsProps = TvDetailsProps & {
    aggregate_credits: TvAggrCreditsProps
    reviews: ReviewDataProps
    images: Omit<MediaImageDataProps, "id">
    videos: Omit<MediaVideosDataProps, "id">
}

export type DynamicDataProps = AppendedMovieDetailsProps | AppendedTvDetailsProps

const dynamicMedia = async ({ media, id }: DynamicMediaProps) => {
    const appendCredits = media === "movie" ? "credits" : "aggregate_credits"

    const data: DynamicDataProps = await fetcher(
        `https://api.themoviedb.org/3/${media}/${id}?language=en-US&api_key=${process.env.API_SECRET}&append_to_response=${appendCredits},reviews,images,videos`
    )
    let newData: DynamicDataProps | any = {}

    if (media === "movie" && "credits" in data) {
        newData = {
            ...data,
            credits: {
                ...data.credits,
                cast: data.credits.cast.slice(0, 9),
                crew: [],
                // crew: data.credits.crew.slice(0, 1),
            },
            images: {
                backdrops: data.images.backdrops.slice(0, 5),
                posters: data.images.posters.slice(0, 5),
                logos: [],
            },
            videos: { results: data.videos.results.slice(0, 6) },
        }
    }
    if (media === "tv" && "aggregate_credits" in data) {
        newData = {
            ...data,
            aggregate_credits: {
                ...data.aggregate_credits,
                cast: data.aggregate_credits.cast.slice(0, 9),
                crew: [],
                // crew: data.aggregate_credits.crew.slice(0, 1),
            },
            images: {
                backdrops: data.images.backdrops.slice(0, 5),
                posters: data.images.posters.slice(0, 5),
                logos: [],
            },
            videos: { results: data.videos.results.slice(0, 3) },
        }
    }

    return newData
}

export default dynamicMedia
