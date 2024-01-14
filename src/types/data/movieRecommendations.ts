// This is an alias for the type of each object in the results array
export type MovieRecommendationProps = {
    adult: boolean
    backdrop_path: string
    id: number
    title: string
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    media_type: string
    genre_ids: number[]
    popularity: number
    release_date: string
    video: boolean
    vote_average: number
    vote_count: number
}

// This is an alias for the type of the whole object
export type MovieRecommendationsProps = {
    page: number
    results: MovieRecommendationProps[]
    total_pages: number
    total_results: number
}
