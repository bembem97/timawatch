import React, { CSSProperties } from "react"
import { MovieDetailsProps } from "~/types/data/movieDetails"
import style from "./style"
import { IMAGE_URL } from "~/constants/misc"
import Text from "~/components/interface/Text"
import toHoursAndMinutes from "~/functions/toHoursAndMinutes"
import getDateFormat from "~/functions/getDateFormat"
import Chip from "~/components/interface/Chip"
import Button from "~/components/interface/Button"
import Icon from "~/components/interface/Icon"
import { StarIcon, BookmarkIcon, HeartIcon } from "@heroicons/react/20/solid"
import WatchVideo from "../WatchVideo"
import Link from "next/link"

const { base, backdrop, content } = style()

export type HeroProps =
    | {
          backdrop_path: MovieDetailsProps["backdrop_path"]
          genres: MovieDetailsProps["genres"]
          id: MovieDetailsProps["id"]
          overview: MovieDetailsProps["overview"]
          release_date: MovieDetailsProps["release_date"]
          runtime: MovieDetailsProps["runtime"]
          tagline: MovieDetailsProps["tagline"]
          title: MovieDetailsProps["title"]
          vote_average: MovieDetailsProps["vote_average"]
      }
    | undefined

interface HomeBannerProps {
    data: HeroProps
}

const HomeBanner = ({ data }: HomeBannerProps) => {
    if (!data || typeof data === "undefined") {
        return (
            <section className={base()}>
                <div className={backdrop()} />
                <div className={content()}>
                    <Text as="p" variant="h1" className="text-danger-foreground">
                        Something went wrong.
                    </Text>
                </div>
            </section>
        )
    }
    const { backdrop_path, genres, id, overview, release_date, runtime, tagline, title, vote_average } = data
    const style = { "--backdrop": `url(${IMAGE_URL}w1280${backdrop_path})` } as CSSProperties

    const year = getDateFormat(release_date, { dateFormat: "year-only" })
    const showReleaseDate = getDateFormat(release_date, { dateFormat: "full-date-long-month" })

    return (
        <section className={base()}>
            <div style={style} className={backdrop()} />
            <div className={content()}>
                <Link href={`/media/movie/${id}`} className="with-hover:hover:underline w-fit">
                    <Text as="h2" variant="h2">
                        {title} ({year})
                    </Text>
                </Link>

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

export default HomeBanner
