export type MediaProps = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    media_type?: "movie" | "tv"
    original_language: string
    original_title?: string
    original_name?: string
    origin_country?: string[]
    overview: string
    popularity: number
    poster_path: string
    release_date?: string
    first_air_date?: string
    title?: string
    name?: string
    video?: boolean
    vote_average: number
    vote_count: number
}

export type MediaListProps = {
    page: number
    results: MediaProps[]
    total_pages: number
    total_results: number
}
