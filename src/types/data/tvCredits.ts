export type TvCastProps = {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string | null
    character: string
    credit_id: string
    order: number
}

export type TvCrewProps = {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string | null
    credit_id: string
    department: string
    job: string
}

export type TvCreditsProps = {
    cast: TvCastProps[]
    crew: TvCrewProps[]
    id: number
}
