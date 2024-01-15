"use client"
import React, { useRef } from "react"
import Card, { CardAction, CardBody, CardMedia } from "~/components/interface/Card"
import Carousel, { CarouselButtons, CarouselSlide, CarouselTitle } from "~/components/interface/Carousel"
import useCarousel from "~/components/interface/Carousel/useCarousel"
import Text from "~/components/interface/Text"
import { IMAGE_URL } from "~/constants/misc"
import { PersonPosterProps, PersonPostersProps } from "~/types/destructured/personPoster"

interface PersonCarouselProps {
    data: PersonPostersProps | undefined
    heading: string
}

const PersonCarousel = ({ data, heading }: PersonCarouselProps) => {
    if (!data || typeof data === "undefined") {
        return <div></div>
    }

    return <PersonDataFulfilled data={data.results} heading={heading} />
}

export default PersonCarousel

function PersonDataFulfilled({ data, heading }: { data: PersonPosterProps[]; heading: string }) {
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
                {data.map(({ id, name, profile_path }) => {
                    const NAME = name || "unknown"

                    return (
                        <Card key={id} className="basis-36 shrink-0 grow-0">
                            <CardAction href={`/media/person/${id}`} title={NAME}>
                                <CardMedia
                                    width={600}
                                    height={900}
                                    alt={NAME}
                                    src={`${IMAGE_URL}w500${profile_path}`}
                                />
                            </CardAction>
                            <CardBody>
                                <Text variant="h4" className="line-clamp-1">
                                    {NAME}
                                </Text>
                            </CardBody>
                        </Card>
                    )
                })}
            </CarouselSlide>
        </Carousel>
    )
}
