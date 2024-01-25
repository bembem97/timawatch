import { API_URL } from "~/constants/misc"
import fetcher from "~/functions/fetcher"
import { MediaWatchProvidersDataProps } from "~/types/data/mediaWatchProvider"

const SECRET = process.env.API_SECRET

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const media = searchParams.get("media")
    const region = searchParams.get("region")

    const data: MediaWatchProvidersDataProps = await fetcher(
        `${API_URL}watch/providers/${media}?language=en-US&watch_region=${region}&api_key=${process.env.API_SECRET}`,
        {
            headers: {
                "Content-Type": "application/json",
                "API-Key": SECRET!,
            },
        }
    )

    const newData = data.results.map(({ logo_path, provider_id, provider_name }) => ({
        logo_path,
        provider_id,
        provider_name,
    }))

    return Response.json(newData)
}
