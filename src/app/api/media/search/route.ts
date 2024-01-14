import { API_URL } from "~/constants/misc"
import fetcher from "~/functions/fetcher"
import { MediaProps } from "~/types/data/media"
import { PersonProps } from "~/types/data/person"

const SECRET = process.env.API_SECRET

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("query")

    const data = await fetcher(
        `${API_URL}search/multi?query=${query}&include_adult=false&language=en-US&page=1&api_key=${SECRET}`
    )
    const sliceData = data.results.slice(0, 10)

    const destructureData = sliceData.map((prop: MediaProps | PersonProps) => {
        if (prop.media_type === "person") {
            const { id, media_type, name, profile_path, popularity } = prop
            return { id, media_type, name, profile_path, popularity }
        }

        const {
            first_air_date,
            id,
            media_type,
            name,
            popularity,
            poster_path,
            release_date,
            title,
            vote_average,
        } = prop as MediaProps
        return {
            first_air_date,
            id,
            media_type,
            name,
            popularity,
            poster_path,
            release_date,
            title,
            vote_average: vote_average.toFixed(1),
        }
    })

    const sortedByPopularity = destructureData.sort(
        (a: MediaProps | PersonProps, b: MediaProps | PersonProps) => b.popularity - a.popularity
    )

    const finalResult = { ...data, results: sortedByPopularity }

    return Response.json(finalResult)
}
