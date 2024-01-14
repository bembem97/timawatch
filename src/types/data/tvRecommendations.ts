// This is an alias for the type of each object in the results array
export type TvRecommendationProps = {
    adult: boolean
    backdrop_path: string
    id: number
    name: string
    original_language: string
    original_name: string
    overview: string
    poster_path: string
    media_type: string
    genre_ids: number[]
    popularity: number
    first_air_date: string
    vote_average: number
    vote_count: number
    origin_country: string[]
}

// This is an alias for the type of the whole object
export type TvRecommendationsProps = {
    page: number
    results: TvRecommendationProps[]
    total_pages: number
    total_results: number
}
