import { API_URL } from "~/constants/misc"
import URL from "~/constants/url"
import fetcher from "~/functions/fetcher"
import getRandomNumber from "~/functions/getRandomNumber"
import mediaDestructuring from "~/functions/mediaDestructuring"
import personDestructuring from "~/functions/personDestructuring"
import { MediaProps } from "~/types/data/media"

const url = (id: number) => `${API_URL}movie/${id}?api_key=${process.env.API_SECRET}&language=en-US`

const homeData = async () => {
    const awaitMovie = fetcher(URL.MOVIE.TRENDING)
    const awaitTv = fetcher(URL.TV.TRENDING)
    const awaitPerson = fetcher(URL.PERSON.TRENDING)
    const awaitPopMovie = fetcher(URL.MOVIE.POPULAR)

    const [movie, tv, person, popularMovie] = await Promise.allSettled([
        awaitMovie,
        awaitTv,
        awaitPerson,
        awaitPopMovie,
    ])

    // todo: get 1 random data to display in hero banner
    let randomNumber = 0
    let movieDetails

    if ("status" in popularMovie && popularMovie.status === "fulfilled") {
        const data: MediaProps[] = popularMovie.value.results
        let id: number

        randomNumber = getRandomNumber(data.length)
        id = data[randomNumber].id

        movieDetails = await fetch(url(id))
            .then((res) => res.json())
            .then(
                ({
                    backdrop_path,
                    genres,
                    id,
                    media_type,
                    overview,
                    release_date,
                    runtime,
                    tagline,
                    title,
                    vote_average,
                }) => ({
                    backdrop_path,
                    genres,
                    id,
                    media_type,
                    overview,
                    release_date,
                    runtime,
                    tagline,
                    title,
                    vote_average,
                })
            )
    }
    // todo: *****

    const destructuredDatas = {
        movie: mediaDestructuring(movie),
        tv: mediaDestructuring(tv),
        person: personDestructuring(person),
        banner: movieDetails,
    }

    return destructuredDatas
}

export default homeData
