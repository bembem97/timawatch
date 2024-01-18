// todo: combined_credits
export type CastCreditsProps = {
    adult: boolean
    backdrop_path: string
    character: string
    credit_id: string
    episode_count?: number
    first_air_date?: string
    genre_ids: number[]
    id: number
    media_type: "movie" | "tv"
    name?: string
    order?: number
    origin_country?: string[]
    original_language: string
    original_name?: string
    original_title?: string
    overview: string
    popularity: number
    poster_path: string
    release_date?: string
    title?: string
    video?: boolean
    vote_average: number
    vote_count: number
}

export type CrewCreditsProps = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title?: string
    original_name?: string
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
    credit_id: string
    department: string
    job: string
    episode_count?: number
    media_type: "movie" | "tv"
    origin_country?: string[]
}

export type CombinedCreditsProps = {
    cast: CastCreditsProps[]
    crew: CrewCreditsProps[]
    id: number
}
