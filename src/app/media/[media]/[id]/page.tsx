import React from "react"
import CollapseText from "~/components/interface/CollapseText"
import ContainerBox from "~/components/interface/ContainerBox"
import Text from "~/components/interface/Text"
import MediaBanner from "~/components/view/Banner/MediaBanner"
import LastSeasonSnippet from "~/components/view/LastSeasonSnippet"
import MediaAlbum from "~/components/view/MediaAlbum"
import MediaCast from "~/components/view/MediaCast"
import Recommendations from "~/components/view/Recommendations"
import UserReviews from "~/components/view/UserReviews"
import { API_URL } from "~/constants/misc"
import dynamicMedia, { DynamicDataProps } from "~/data/dynamicMedia"
import fetcher from "~/functions/fetcher"
import { MediaProps } from "~/types/data/media"

type MediaPageProps = {
    params: { id: string; media: MediaProps["media_type"] }
}

export async function generateMetadata({ params }: MediaPageProps) {
    const { id, media } = params
    const data = await fetcher(`${API_URL}${media}/${id}?language=en-US&api_key=${process.env.API_SECRET}`)

    if (!data || typeof data === "undefined") {
        return { title: "untitled" }
    }
    const { title, name } = data

    return { title: `${title || name} - Timawatch` }
}

export default async function MediaPage({ params }: MediaPageProps) {
    const { id, media } = params
    const data: DynamicDataProps = await dynamicMedia({ media, id })

    return (
        <main className="item-main">
            <MediaBanner data={data} mediaType={media} />

            <ContainerBox as="section" className="flex flex-col gap-y-6 pt-6">
                {media === "movie" && "credits" in data ? (
                    <MediaCast data={data.credits.cast} />
                ) : media === "tv" && "aggregate_credits" in data ? (
                    <MediaCast data={data.aggregate_credits.cast} />
                ) : null}

                {"last_episode_to_air" in data && (
                    <LastSeasonSnippet
                        title={data.name}
                        lastEpisodeToAir={data.last_episode_to_air}
                        lastSeasonEpisodes={data.seasons}
                    />
                )}

                <UserReviews data={data.reviews.results} />

                <MediaAlbum mediaId={id} mediaType={media} />

                <Recommendations mediaId={id} mediaType={media} />
            </ContainerBox>
        </main>
    )
}
