"use client"
import React, { useRef } from "react"
import Card, { CardAction, CardBody, CardMedia } from "~/components/interface/Card"
import Carousel, { CarouselButtons, CarouselSlide, CarouselTitle } from "~/components/interface/Carousel"
import useCarousel from "~/components/interface/Carousel/useCarousel"
import Text from "~/components/interface/Text"
import { IMAGE_URL } from "~/constants/misc"
import { CastCreditsProps } from "~/types/data/combinedCredits"

const KnownFor = ({ data }: { data: CastCreditsProps[] }) => {
    const ref = useRef(null)
    const { scrollLeft, scrollRight, muteNext, mutePrev } = useCarousel(ref)

    const filteredData = data.filter(
        (item) =>
            item.character !== "" && !/self/i.test(item.character) && !/uncredited/i.test(item.character)
    )
    const sortedByPopularity = filteredData.sort((a, b) => b.popularity - a.popularity)
    const slicedTo12Item = sortedByPopularity.slice(0, 12)

    return (
        <Carousel className="basis-auto">
            {/* <Text variant="h3" className="carousel__title">
                Known For
            </Text> */}
            <CarouselTitle heading="Known For" />
            <CarouselButtons
                prevProps={{ onClick: () => scrollLeft(), disabled: mutePrev }}
                nextProps={{ onClick: () => scrollRight(), disabled: muteNext }}
            />

            <CarouselSlide ref={ref} className="bg-background">
                {slicedTo12Item.map(({ character, id, media_type, name, poster_path, title }, i) => (
                    <Card key={`${id}-${i}`} className="basis-44 grow-0 shrink-0">
                        <CardAction href={`/media/${media_type}/${id}`}>
                            <CardMedia
                                width={600}
                                height={900}
                                alt={title || name || ""}
                                src={`${IMAGE_URL}w500${poster_path}`}
                            />
                        </CardAction>
                        <CardBody className="flex flex-col">
                            <Text variant="h4">{title || name || "untitled"}</Text>
                            <Text className="text-foreground-mute">{character ? `as ${character}` : ""}</Text>
                        </CardBody>
                    </Card>
                ))}
            </CarouselSlide>
        </Carousel>
    )
}

export default KnownFor
