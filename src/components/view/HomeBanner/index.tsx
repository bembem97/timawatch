import React, { CSSProperties } from "react"
import { MovieDetails } from "~/types/data/movieDetails"
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

const { base, backdrop, content } = style()

export type HeroProps =
    | {
          backdrop_path: MovieDetails["backdrop_path"]
          genres: MovieDetails["genres"]
          id: MovieDetails["id"]
          overview: MovieDetails["overview"]
          release_date: MovieDetails["release_date"]
          runtime: MovieDetails["runtime"]
          tagline: MovieDetails["tagline"]
          title: MovieDetails["title"]
          vote_average: MovieDetails["vote_average"]
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
                    <Text variant="h1" className="text-danger-foreground">
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
                <Text as="h2" variant="h2">
                    {title} ({year})
                </Text>
                <div className="flex flex-wrap items-center gap-x-2">
                    <Chip
                        label={Number(vote_average).toFixed(1)}
                        iconStart={<Icon icon={StarIcon} />}
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
                            className={String.raw`text-foreground-mute [&:not(:last-of-type)]:after:content-['\00a0|_'] flex items-center`}
                        >
                            {genre.name}
                        </Text>
                    ))}
                </div>

                <div className="flex items-center gap-x-4">
                    <WatchVideo />
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
