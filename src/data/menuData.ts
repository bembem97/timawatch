import { FilmIcon, TvIcon, UserGroupIcon } from "@heroicons/react/20/solid"
import IconProps from "~/types/interface/icon"

type MenuDataProps = {
    id: number
    label: string
    Icon: IconProps
    status: {
        id: number
        label: string
        pathname: string
    }[]
}[]

const menuData: MenuDataProps = [
    {
        id: 1,
        label: "Movies",
        Icon: FilmIcon,
        status: [
            {
                id: 1.1,
                label: "Now Playing",
                pathname: "/movie/now-playing",
            },
            {
                id: 1.2,
                label: "Popular",
                pathname: "/movie/popular",
            },
            {
                id: 1.3,
                label: "Top Rated",
                pathname: "/movie/top-rated",
            },
            {
                id: 1.4,
                label: "Upcoming",
                pathname: "/movie/upcoming",
            },
        ],
    },
    {
        id: 2,
        label: "Tv",
        Icon: TvIcon,
        status: [
            {
                id: 2.1,
                label: "Airing Today",
                pathname: "/tv/airing-today",
            },
            {
                id: 2.2,
                label: "Popular",
                pathname: "/tv/popular",
            },
            {
                id: 2.3,
                label: "Top Rated",
                pathname: "/tv/top-rated",
            },
            {
                id: 2.4,
                label: "On The Air",
                pathname: "/tv/on-the-air",
            },
        ],
    },
    {
        id: 3,
        label: "People",
        Icon: UserGroupIcon,
        status: [
            {
                id: 3.1,
                label: "Popular",
                pathname: "/person/popular",
            },
        ],
    },
]

export default menuData
