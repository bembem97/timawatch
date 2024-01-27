import { API_URL } from "~/constants/misc"
import advanceDateTo from "~/functions/advanceDateTo"
import fetcher from "~/functions/fetcher"
import getDate from "~/functions/getDate"
import { DiscoverDataProps } from "~/types/discover"

const SECRET = process.env.API_SECRET

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const media = searchParams.get("media")
    const status = searchParams.get("status")

    const data: DiscoverDataProps = await fetcher(
        `${API_URL}${media}/${status}?api_key=${SECRET}&language=en-US&page=1`
    )

    const withMaxDate = data.dates ? data.dates.maximum : getDate(advanceDateTo())
    const withMinDate = data.dates ? data.dates.minimum : ""

    // console.log("withMaxDate", withMaxDate)
    // console.log("withMinDate", withMinDate)

    const newData = {
        ...data,
        dates: {
            maximum: withMaxDate,
            minimum: withMinDate,
        },
        results: data.results.map(
            ({ id, title, name, first_air_date, media_type, poster_path, release_date, vote_average }) => ({
                first_air_date,
                id,
                name,
                poster_path,
                media_type,
                release_date,
                title,
                vote_average,
            })
        ),
    }

    return Response.json(newData)
}
