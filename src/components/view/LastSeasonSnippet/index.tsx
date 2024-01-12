import { StarIcon } from "@heroicons/react/20/solid"
import React from "react"
import Card, { CardBody, CardMedia } from "~/components/interface/Card"
import Chip from "~/components/interface/Chip"
import ContainerBox from "~/components/interface/ContainerBox"
import Icon from "~/components/interface/Icon"
import Text from "~/components/interface/Text"
import { IMAGE_URL } from "~/constants/misc"
import getDateFormat from "~/functions/getDateFormat"
import { LastEpisodeToAirProps, SeasonsProps } from "~/types/data/tvDetails"

interface LastSeasonSnippetProps {
    lastEpisodeToAir: LastEpisodeToAirProps
    lastSeasonEpisodes: SeasonsProps[]
    title: string
}

const LastSeasonSnippet = ({ title, lastEpisodeToAir, lastSeasonEpisodes }: LastSeasonSnippetProps) => {
    const { season_number, episode_number, name, episode_type, air_date } = lastEpisodeToAir
    const finaleDate = getDateFormat(air_date, { dateFormat: "full-date-long-month" })

    const lastAiredEp = lastSeasonEpisodes.filter(({ air_date }) => air_date !== null)
    const lastSeasonEp = lastSeasonEpisodes[lastAiredEp.length - 1]

    const date = getDateFormat(lastSeasonEpisodes[0].air_date, { dateFormat: "full-date-long-month" })
    const lastEpisodeOverview = lastSeasonEp.overview
        ? lastSeasonEp.overview
        : `Season 1 of ${title || "this show"} premiered on ${date}`
    const voteAverage = lastSeasonEp.vote_average
    const year = getDateFormat(lastSeasonEp.air_date, { dateFormat: "year-only" })

    return (
        <section className="flex flex-col gap-y-8">
            <Text variant="h2" as="h2">
                Last Season
            </Text>

            <ContainerBox className="bg-background-light rounded-xl py-4 px-2.5">
                <Card layout="landscape" className="grid-cols-[max-content_1fr] gap-x-4">
                    <CardMedia
                        alt={title}
                        src={`${IMAGE_URL}w500${lastSeasonEp.poster_path}`}
                        width={600}
                        height={900}
                        className="w-40 rounded-xl hidden 2xl:block"
                    />
                    <CardBody className="gap-y-4">
                        <Text variant="h3">Season {season_number}</Text>
                        <div className="flex items-center gap-x-2">
                            <Chip
                                iconStart={<Icon icon={StarIcon} size="sm" />}
                                label={voteAverage.toFixed(1)}
                                variant="filled"
                                color="accent"
                            />
                            <Text variant="h4" className="text-foreground-mute">
                                {year}
                            </Text>
                            &bull;
                            <Text variant="h4" className="text-foreground-mute">
                                {lastSeasonEp.episode_count} Episodes
                            </Text>
                        </div>
                        <Text as="p" className="text-foreground-mute">
                            {lastEpisodeOverview}
                        </Text>
                        <div className="flex items-center flex-wrap gap-x-2">
                            <Text variant="h4" className="grow 4xl:grow-0 basis-full 4xl:basis-auto">
                                {name}
                            </Text>
                            <Text className="text-foreground-mute">
                                ({season_number}x{episode_number}) {finaleDate}
                            </Text>
                            {episode_type === "finale" && <Chip label="Season Finale" variant="filled" />}
                        </div>
                    </CardBody>
                </Card>
            </ContainerBox>
        </section>
    )
}

export default LastSeasonSnippet
