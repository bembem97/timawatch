import React from "react"
import FilterProvider from "~/components/view/FilterSearch/FilterProvider"
import FilterResult from "~/components/view/FilterSearch/FilterResult"
import FilterTools from "~/components/view/FilterSearch/FilterTools"
import filterSearch from "~/data/filterPage"
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

export default async function Page({ params }: MediaPageProps) {
    const { media, status } = params
    const filters = await filterSearch(media, status)

    return (
        <main className="item-main @container/maincontainer">
            <div className="grid grid-cols-1 @lg/maincontainer:grid-cols-[1fr_248px] pr-2">
                <FilterProvider status={status} media={media}>
                    <div>
                        <FilterResult />
                    </div>

                    <div className="sticky top-0 px-2">
                        <FilterTools filters={filters} mediaType={media} sortBy={status} />
                    </div>
                </FilterProvider>
            </div>
        </main>
    )
}

function capitalizeStr(result: string) {
    return result
        .split(" ")
        .map((word) => word[0].toLocaleUpperCase() + word.slice(1))
        .join(" ")
}
