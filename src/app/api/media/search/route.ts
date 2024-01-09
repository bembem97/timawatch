import fetcher from "~/functions/fetcher"

const SECRET = process.env.API_SECRET

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("query")

    const data = await fetcher(
        `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1&api_key=${SECRET}`
    )

    return Response.json(data)
}
