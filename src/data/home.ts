import URL from "~/constants/url"
import fetcher from "~/functions/fetcher"
import { MediaListProps } from "~/types/data/media"
import { PersonListProps } from "~/types/data/person"

type HomeDataProps = {
    movie: PromiseSettledResult<MediaListProps>
    tv: PromiseSettledResult<MediaListProps>
    person: PromiseSettledResult<PersonListProps>
}

const homeData = async () => {
    const awaitMovie = fetcher(URL.MOVIE.TRENDING)
    const awaitTv = fetcher(URL.TV.TRENDING)
    const awaitPerson = fetcher(URL.PERSON.TRENDING)

    const [movie, tv, person] = await Promise.allSettled([awaitMovie, awaitTv, awaitPerson])
    const data: HomeDataProps = { movie, tv, person }

    return data
}

export default homeData
