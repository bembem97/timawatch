export type CastRoleProps = {
    credit_id: string
    character: string
    episode_count: number
}

export type AggrCastProps = {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string | null
    roles: CastRoleProps[]
    total_episode_count: number
    order: number
}

export type AggrCrewJobProps = {
    credit_id: string
    job: string
    episode_count: number
}

export type AggrCrewProps = {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string | null
    jobs: AggrCrewJobProps[]
    department: string
    total_episode_count: number
}

export type TvAggrCreditsProps = {
    cast: AggrCastProps[]
    crew: AggrCrewProps[]
    id: number
}
