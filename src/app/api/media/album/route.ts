import { API_URL } from "~/constants/misc"
import fetcher from "~/functions/fetcher"
import { MediaImageDataProps, MediaImageProps } from "~/types/data/mediaImages"
import { MediaVideoProps, MediaVideosDataProps } from "~/types/data/mediaVideos"

const SECRET = process.env.API_SECRET

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    const media = searchParams.get("media")

    const awaitImages = fetcher(
        `${API_URL}${media}/${id}/images?api_key=${SECRET}&language=en-US&include_image_language=en`,
        {
            headers: {
                "Content-Type": "application/json",
                "API-Key": SECRET!,
            },
        }
    )
    const awaitVideos = fetcher(`${API_URL}${media}/${id}/videos?api_key=${SECRET}&language=en-US`, {
        headers: {
            "Content-Type": "application/json",
            "API-Key": SECRET!,
        },
    })
    const [videos, images] = await Promise.all([awaitVideos, awaitImages])

    const data: { images: MediaImageDataProps; videos: MediaVideosDataProps } = {
        images,
        videos,
    }
    const album = {
        images: {
            backdrops: data.images.backdrops.slice(0, 9).map(({ file_path }) => ({ file_path })),
            posters: data.images.posters.slice(0, 9).map(({ file_path }) => ({ file_path })),
        },
        videos: data.videos.results.slice(0, 9).map(({ id, key }) => ({ id, key })),
    }

    return Response.json(album)
}
