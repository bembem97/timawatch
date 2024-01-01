import fetcher from "~/functions/fetcher"

type DynamicMediaProps = {
    type: "movie" | "tv"
    id: string
}

const dynamicMedia = async ({ type, id }: DynamicMediaProps) => {
    const data = fetcher(
        `https://api.themoviedb.org/3/${type}/${id}?language=en-US&api_key=${process.env.API_SECRET}`
    )

    return data
}

export default dynamicMedia
