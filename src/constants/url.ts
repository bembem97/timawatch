import { API_URL } from "./misc"

const KEY = process.env.API_SECRET

const URL = {
    MOVIE: {
        POPULAR: `${API_URL}movie/popular?api_key=${KEY}&language=en-US&page=1`,
        TOP_RATED: `${API_URL}movie/top_rated?api_key=${KEY}&language=en-US&page=1`,
        NOW_PLAYING: `${API_URL}movie/now_playing?api_key=${KEY}&language=en-US&page=1`,
        UPCOMING: `${API_URL}movie/upcoming?api_key=${KEY}&language=en-US&page=1`,
        TRENDING: `${API_URL}trending/movie/day?api_key=${KEY}&language=en-US`,
    },
    TV: {
        POPULAR: `${API_URL}tv/popular?api_key=${KEY}&language=en-US&page=1`,
        TOP_RATED: `${API_URL}tv/top_rated?api_key=${KEY}&language=en-US&page=1`,
        ON_THE_AIR: `${API_URL}tv/on_the_air?api_key=${KEY}&language=en-US&page=1`,
        AIRING_TODAY: `${API_URL}tv/airing_today?api_key=${KEY}&language=en-US&page=1`,
        TRENDING: `${API_URL}trending/tv/day?api_key=${KEY}&language=en-US`,
    },
    PERSON: {
        POPULAR: `${API_URL}person/popular?api_key=${KEY}&language=en-US&page=1`,
        TRENDING: `${API_URL}trending/person/day?api_key=${KEY}&language=en-US`,
    },
}

export default URL
