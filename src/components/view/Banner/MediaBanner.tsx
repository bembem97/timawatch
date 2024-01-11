import React, { CSSProperties } from "react"
import style from "./style"
import { MovieDetailsProps } from "~/types/data/movieDetails"
import { TvDetailsProps } from "~/types/data/tvDetails"
import { IMAGE_URL } from "~/constants/misc"
import Text from "~/components/interface/Text"
import getDateFormat from "~/functions/getDateFormat"
import { MediaProps } from "~/types/data/media"
import Chip from "~/components/interface/Chip"
import Icon from "~/components/interface/Icon"
import toHoursAndMinutes from "~/functions/toHoursAndMinutes"
import { BookmarkIcon, HeartIcon, StarIcon } from "@heroicons/react/20/solid"
import WatchVideo from "../WatchVideo"
import Button from "~/components/interface/Button"

const { base, backdrop, content } = style()

interface MediaBanner {
    data: MovieDetailsProps | TvDetailsProps
    mediaType: MediaProps["media_type"]
}

const MediaBanner = ({ data, mediaType }: MediaBanner) => {
    if (mediaType === "movie" && "title" in data) {
        return <MovieBannerInfo data={data} />
    }

    if (mediaType === "tv" && "name" in data) {
        return <TvBannerInfo data={data} />
    }

    return <ErrorComponent />
}

export default MediaBanner

function MovieBannerInfo({ data }: { data: MovieDetailsProps }) {
    const { backdrop_path, genres, id, overview, release_date, runtime, tagline, title, vote_average } = data
    const year = getDateFormat(release_date, { dateFormat: "year-only" })
    const style = { "--backdrop": `url(${IMAGE_URL}w1280${backdrop_path})` } as CSSProperties

    const showReleaseDate = getDateFormat(release_date, { dateFormat: "full-date-long-month" })

    return (
        <section className={base()}>
            <div style={style} className={backdrop()} />
            <div className={content()}>
                <Text variant="h2" as="h1">
                    {title} ({year})
                </Text>

                <div className="flex flex-wrap items-center gap-x-2">
                    <Chip
                        label={Number(vote_average).toFixed(1)}
                        iconStart={<Icon icon={StarIcon} size="xs" />}
                        variant="filled"
                        color="accent"
                    />
                    &bull;
                    <Text className="text-foreground-mute">{showReleaseDate}</Text>
                    &bull;
                    <Text className="text-foreground-mute">{toHoursAndMinutes(runtime)}</Text>
                </div>

                <div role="group" className="flex flex-wrap gap-x-1">
                    {genres.map((genre) => (
                        <Text
                            key={genre.id}
                            className={String.raw`text-foreground-mute [&:not(:last-of-type)]:after:content-['\00a0|\00a0'] flex items-center`}
                        >
                            {genre.name}
                        </Text>
                    ))}
                </div>

                <div className="flex items-center gap-x-4">
                    <WatchVideo mediaId={id} mediaType="movie" variant="filled" color="accent" />
                    <Button iconStart={BookmarkIcon} />
                    <Button iconStart={HeartIcon} />
                </div>

                <div className="flex flex-col gap-y-2">
                    <Text as="p" variant="h4" className="italic text-foreground-mute">
                        {tagline}
                    </Text>

                    <Text as="p">{overview}</Text>
                </div>
            </div>
        </section>
    )
}

function TvBannerInfo({ data }: { data: TvDetailsProps }) {
    const { backdrop_path, first_air_date, genres, id, name, overview, tagline, vote_average } = data

    const year = getDateFormat(first_air_date, { dateFormat: "year-only" })
    const style = { "--backdrop": `url(${IMAGE_URL}w1280${backdrop_path})` } as CSSProperties

    const showReleaseDate = getDateFormat(first_air_date, { dateFormat: "full-date-long-month" })

    return (
        <section className={base()}>
            <div style={style} className={backdrop()} />
            <div className={content()}>
                <Text variant="h2" as="h1">
                    {name} ({year})
                </Text>

                <div className="flex flex-wrap items-center gap-x-2">
                    <Chip
                        label={Number(vote_average).toFixed(1)}
                        iconStart={<Icon icon={StarIcon} size="xs" />}
                        variant="filled"
                        color="accent"
                    />
                    &bull;
                    <Text className="text-foreground-mute">{showReleaseDate}</Text>
                </div>

                <div role="group" className="flex flex-wrap gap-x-1">
                    {genres.map((genre) => (
                        <Text
                            key={genre.id}
                            className={String.raw`text-foreground-mute [&:not(:last-of-type)]:after:content-['\00a0|\00a0'] flex items-center`}
                        >
                            {genre.name}
                        </Text>
                    ))}
                </div>

                <div className="flex items-center gap-x-4">
                    <WatchVideo mediaId={id} mediaType="movie" variant="filled" color="accent" />
                    <Button iconStart={BookmarkIcon} />
                    <Button iconStart={HeartIcon} />
                </div>

                <div className="flex flex-col gap-y-2">
                    <Text as="p" variant="h4" className="italic text-foreground-mute">
                        {tagline}
                    </Text>

                    <Text as="p">{overview}</Text>
                </div>
            </div>
        </section>
    )
}

function ErrorComponent() {
    return (
        <section className={base()}>
            <div className={backdrop()} />
            <div className={content()}>
                <Text as="p" variant="h2" className="text-danger-foreground text-center">
                    Something went wrong.
                </Text>
            </div>
        </section>
    )
}
