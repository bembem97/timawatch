"use client"
import { StarIcon } from "@heroicons/react/20/solid"
import React, { useRef } from "react"
import Card, { CardAction, CardBody, CardMedia } from "~/components/interface/Card"
import Carousel, { CarouselButtons, CarouselSlide, CarouselTitle } from "~/components/interface/Carousel"
import useCarousel from "~/components/interface/Carousel/useCarousel"
import Chip from "~/components/interface/Chip"
import Icon from "~/components/interface/Icon"
import Text from "~/components/interface/Text"
import { IMAGE_URL } from "~/constants/misc"
import getDateFormat from "~/functions/getDateFormat"
import { MediaPosterProps, MediaPostersProps } from "~/types/destructured/mediaPoster"
import WatchVideo from "../WatchVideo"
import { MediaProps } from "~/types/data/media"

interface MediaCarouselProps {
    data: MediaPostersProps | undefined
    heading: string
    type: MediaProps["media_type"]
}

const MediaCarousel = ({ data, type, heading }: MediaCarouselProps) => {
    if (!data || typeof data === "undefined") {
        return <div></div>
    }

    return <MediaDataFulfilled data={data.results} type={type} heading={heading} />
}

export default MediaCarousel

function MediaDataFulfilled({
    data,
    type,
    heading,
}: {
    data: MediaPosterProps[]
    heading: string
    type: MediaProps["media_type"]
}) {
    const ref = useRef(null)
    const { scrollLeft, scrollRight, muteNext, mutePrev } = useCarousel(ref)

    return (
        <Carousel as="section">
            <CarouselTitle heading={heading} />
            <CarouselButtons
                prevProps={{ onClick: () => scrollLeft(), disabled: mutePrev }}
                nextProps={{ onClick: () => scrollRight(), disabled: muteNext }}
            />

            <CarouselSlide ref={ref} className="bg-background">
                {data.map(({ first_air_date, id, release_date, vote_average, name, title, poster_path }) => {
                    const TITLE = name || title || "untitled"
                    const date = getDateFormat(release_date || first_air_date, {
                        dateFormat: "full-date-short-month",
                    })

                    return (
                        <Card key={id} className="basis-36 shrink-0 grow-0">
                            <CardAction href="/" title={TITLE}>
                                <CardMedia
                                    width={600}
                                    height={900}
                                    alt={TITLE}
                                    src={`${IMAGE_URL}w500${poster_path}`}
                                />
                            </CardAction>
                            <CardBody>
                                <Text variant="h4" className="line-clamp-1">
                                    {TITLE}
                                </Text>
                                <div className="flex justify-between items-center">
                                    <Text className="text-foreground-mute">{date}</Text>
                                    <Chip
                                        label={vote_average.toFixed(1)}
                                        variant="outlined"
                                        color="accent"
                                        size="xs"
                                        iconStart={<Icon icon={StarIcon} size="xs" />}
                                    />
                                </div>
                                <WatchVideo mediaId={id} mediaType={type} size="sm" />
                            </CardBody>
                        </Card>
                    )
                })}
            </CarouselSlide>
        </Carousel>
    )
}
