export type KnownForProps = {
    adult: boolean
    backdrop_path: string
    id: number
    title: string
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    media_type?: string
    genre_ids: number[]
    popularity: number
    release_date: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type PersonProps = {
    adult: boolean
    id: number
    name: string
    original_name: string
    media_type?: "person"
    popularity: number
    gender: number
    known_for_department: string
    profile_path: string
    known_for: KnownForProps[]
}

export type PersonListProps = {
    page: number
    results: PersonProps[]
    total_pages: number
    total_results: number
}
