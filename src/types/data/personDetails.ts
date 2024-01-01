import { CombinedCreditsProps } from "./combinedCredits"

export type PersonDetailsProps = {
    adult: boolean
    also_known_as: string[]
    biography: string
    birthday: string
    deathday: string | null
    gender: number
    homepage: string | null
    id: number
    imdb_id: string
    known_for_department: string
    name: string
    place_of_birth: string
    popularity: number
    profile_path: string
    combined_credits: CombinedCreditsProps
}
