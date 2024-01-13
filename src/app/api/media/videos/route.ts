import { API_URL } from "~/constants/misc"
import fetcher from "~/functions/fetcher"
import { MediaVideosDataProps } from "~/types/data/mediaVideos"

const SECRET = process.env.API_SECRET

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    const media = searchParams.get("media")

    const data: MediaVideosDataProps = await fetcher(
        `${API_URL}${media}/${id}/videos?api_key=${SECRET}&language=en-US`,
        {
            headers: {
                "Content-Type": "application/json",
                "API-Key": SECRET!,
            },
        }
    )

    let officialTrailer

    if (typeof data === "undefined") {
        return Response.json({})
    }

    officialTrailer = data.results.find(
        (d) => d.official === true && d.type.toLocaleLowerCase() === "Trailer".toLocaleLowerCase()
    )

    return Response.json(officialTrailer)
}
