import fetcher from "~/functions/fetcher"
import { PersonDetailsProps } from "~/types/data/personDetails"

const dynamicPerson = async (paramsId: string) => {
    const data: PersonDetailsProps = await fetcher(
        `https://api.themoviedb.org/3/person/${paramsId}?language=en-US&api_key=${process.env.API_SECRET}&append_to_response=combined_credits`
    )

    const {
        also_known_as,
        biography,
        birthday,
        combined_credits,
        deathday,
        gender,
        id,
        known_for_department,
        name,
        place_of_birth,
        profile_path,
    } = data

    return {
        also_known_as,
        biography,
        birthday,
        combined_credits,
        deathday,
        gender,
        id,
        known_for_department,
        name,
        place_of_birth,
        profile_path,
    }
}

export default dynamicPerson
