import React from "react"
import { MediaProps } from "~/types/data/media"

type MediaPageProps = {
    params: {
        media: MediaProps["media_type"]
        status: "popular" | "top-rated" | "upcoming" | "now-playing" | "airing-today" | "on-the-air"
    }
}

export async function generateMetadata({ params }: MediaPageProps) {
    const { media, status } = params

    const mediaType = media === "movie" ? "movies" : media === "tv" ? "tv series" : ""

    return { title: `Discover ${status} ${mediaType} - Timawatch` }
}

export default function Page({ params }: MediaPageProps) {
    return <div>Page</div>
}
