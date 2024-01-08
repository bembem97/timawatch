import { API_URL } from "~/constants/misc"
import URL from "~/constants/url"
import fetcher from "~/functions/fetcher"
import getRandomNumber from "~/functions/getRandomNumber"
import { MediaListProps, MediaProps } from "~/types/data/media"
import { MovieDetails } from "~/types/data/movieDetails"
import { PersonListProps } from "~/types/data/person"
import { MediaPostersProps } from "~/types/destructured/mediaPoster"
import { PersonPostersProps } from "~/types/destructured/personPoster"

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
            .then(({ backdrop_path, genres, id, release_date, runtime, tagline, title, vote_average }) => ({
                backdrop_path,
                genres,
                id,
                release_date,
                runtime,
                tagline,
                title,
                vote_average,
            }))
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

function mediaDestructuring(data: PromiseSettledResult<MediaListProps>): MediaPostersProps | undefined {
    if ("status" in data && data.status === "rejected") {
        return
    }

    const results = data.value.results.map(
        ({ id, title, name, first_air_date, poster_path, release_date, vote_average }) => ({
            first_air_date,
            id,
            name,
            poster_path,
            release_date,
            title,
            vote_average,
        })
    )

    return { ...data.value, results }
}

function personDestructuring(data: PromiseSettledResult<PersonListProps>): PersonPostersProps | undefined {
    if ("status" in data && data.status === "rejected") {
        return
    }

    const results = data.value.results.map(({ id, name, profile_path }) => ({
        id,
        name,
        profile_path,
    }))

    return { ...data.value, results }
}
