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
    const hyphenToSpace = status.replace(/-/g, " ")
    const STATUS = capitalizeStr(hyphenToSpace)

    const mediaType = media === "movie" ? "movies" : media === "tv" ? "tv series" : ""
    const MEDIA = capitalizeStr(mediaType)

    return { title: `Discover ${STATUS} ${MEDIA} - Timawatch` }
}

export default function Page({ params }: MediaPageProps) {
    return (
        <main className="item-main grid grid-cols-[1fr_280px] pr-2">
            <div className=""></div>
            <div className="bg-background-light sticky top-0"></div>
        </main>
    )
}

function capitalizeStr(result: string) {
    return result
        .split(" ")
        .map((word) => word[0].toLocaleUpperCase() + word.slice(1))
        .join(" ")
}
