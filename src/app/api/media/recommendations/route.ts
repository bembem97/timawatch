import { API_URL } from "~/constants/misc"
import fetcher from "~/functions/fetcher"
import { MovieRecommendationsProps } from "~/types/data/movieRecommendations"
import { TvRecommendationsProps } from "~/types/data/tvRecommendations"

const SECRET = process.env.API_SECRET

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    const media = searchParams.get("media")

    const data: TvRecommendationsProps | MovieRecommendationsProps = await fetcher(
        `${API_URL}${media}/${id}/recommendations?api_key=${SECRET}&language=en-US&page=1`,
        {
            headers: {
                "Content-Type": "application/json",
                "API-Key": SECRET!,
            },
        }
    )
    const newData = data.results.map((prop) => {
        const { backdrop_path, id, media_type } = prop

        if ("title" in prop) {
            const { title } = prop
            return { title, backdrop_path, id }
        }

        const { name } = prop
        return { id, name, backdrop_path, media_type }
    })

    const recommendations = newData.slice(0, 12)

    return Response.json(recommendations)
}
