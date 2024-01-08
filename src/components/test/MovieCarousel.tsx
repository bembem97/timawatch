"use client"
import React, { useRef } from "react"
import Carousel, { CarouselButtons, CarouselSlide, CarouselTitle } from "../interface/Carousel"
import useCarousel from "../interface/Carousel/useCarousel"
import Card, { CardAction, CardBody, CardMedia } from "../interface/Card"
import Text from "../interface/Text"

interface MovieCarouselProps {
    heading: string
}

const MovieCarousel = ({ heading }: MovieCarouselProps) => {
    const ref = useRef(null)

    const { scrollLeft, scrollRight, muteNext, mutePrev } = useCarousel(ref)
    return (
        <>
            <Carousel>
                <CarouselTitle heading={heading} />
                <CarouselButtons
                    prevProps={{ onClick: () => scrollLeft(), disabled: mutePrev }}
                    nextProps={{ onClick: () => scrollRight(), disabled: muteNext }}
                />

                <CarouselSlide ref={ref} className="bg-background">
                    {Array.from({ length: 25 }, (_, index) => (
                        <div key={index} className="basis-40 shrink-0 grow-0">
                            <Card>
                                <CardAction href="/">
                                    <CardMedia
                                        src="/image/arcane_poster.jpg"
                                        width="600"
                                        height="900"
                                        alt="Poster"
                                    />
                                </CardAction>

                                <CardBody>
                                    <Text variant="h4">Card Title</Text>
                                    <Text className="text-foreground-mute">Subtext</Text>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </CarouselSlide>
            </Carousel>
        </>
    )
}

export default MovieCarousel
