"use client"
import React, { useRef } from "react"
import Card, { CardAction, CardBody, CardMedia } from "~/components/interface/Card"
import Carousel, { CarouselButtons, CarouselSlide, CarouselTitle } from "~/components/interface/Carousel"
import useCarousel from "~/components/interface/Carousel/useCarousel"
import Text from "~/components/interface/Text"
import { IMAGE_URL } from "~/constants/misc"
import { MovieCastProps } from "~/types/data/movieCredits"
import { AggrCastProps } from "~/types/data/tvAggregateCredits"

interface MediaCastProps {
    data: AggrCastProps[] | MovieCastProps[]
}

const MediaCast = ({ data }: MediaCastProps) => {
    const ref = useRef(null)
    const { scrollLeft, scrollRight, muteNext, mutePrev } = useCarousel(ref)
    return (
        <Carousel as="section">
            <CarouselTitle heading="Cast" />
            <CarouselButtons
                prevProps={{ onClick: () => scrollLeft(), disabled: mutePrev }}
                nextProps={{ onClick: () => scrollRight(), disabled: muteNext }}
            />

            <CarouselSlide ref={ref} className="bg-background">
                {data.map(({ id, name, profile_path, ...rest }) => {
                    if ("roles" in rest) {
                        return (
                            <Card key={id} className="basis-36 shrink-0 grow-0">
                                <CardAction href={`/media/person/${id}`}>
                                    <CardMedia
                                        alt={name}
                                        src={`${IMAGE_URL}w500${profile_path}`}
                                        width={600}
                                        height={900}
                                    />
                                </CardAction>
                                <CardBody>
                                    <Text variant="h4">{name}</Text>
                                    <Text className="text-foreground-mute" as="p">
                                        {rest.roles
                                            .map(({ character, episode_count }) => character)
                                            .join(", ")}

                                        <span className="block">{rest.roles[0].episode_count} Episodes</span>
                                    </Text>
                                </CardBody>
                            </Card>
                        )
                    }

                    return (
                        <Card key={id} className="basis-36 shrink-0 grow-0">
                            <CardAction href={`/media/person/${id}`}>
                                <CardMedia
                                    alt={name}
                                    src={`${IMAGE_URL}w500${profile_path}`}
                                    width={600}
                                    height={900}
                                />
                            </CardAction>
                            <CardBody>
                                <Text variant="h4">{name}</Text>
                                <Text className="text-foreground-mute">{rest.character}</Text>
                            </CardBody>
                        </Card>
                    )
                })}
            </CarouselSlide>
        </Carousel>
    )
}

export default MediaCast
