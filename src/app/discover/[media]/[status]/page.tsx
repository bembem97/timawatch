import React from "react"
import FilterProvider from "~/components/view/FilterSearch/FilterProvider"
import FilterResult from "~/components/view/FilterSearch/FilterResult"
import FilterTools, { FilterToolsProps } from "~/components/view/FilterSearch/FilterTools"
import { sortBy } from "~/components/view/FilterSearch/constants"
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
    const filters = await filterSearch(media)

    return (
        <main className="item-main grid grid-cols-[1fr_280px] pr-2">
            <FilterProvider>
                <div className="">
                    <FilterResult />
                </div>

                <div className="sticky top-0 px-2">
                    <FilterTools filters={filters} mediaType={media} sortBy={status} />
                </div>
            </FilterProvider>
        </main>
    )
}

function capitalizeStr(result: string) {
    return result
        .split(" ")
        .map((word) => word[0].toLocaleUpperCase() + word.slice(1))
        .join(" ")
}
