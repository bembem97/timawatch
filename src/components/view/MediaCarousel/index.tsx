"use client"
import React, { useRef } from "react"
import Card, { CardAction, CardBody, CardMedia } from "~/components/interface/Card"
import Carousel, { CarouselButtons, CarouselSlide, CarouselTitle } from "~/components/interface/Carousel"
import useCarousel from "~/components/interface/Carousel/useCarousel"
import Text from "~/components/interface/Text"
import { IMAGE_URL } from "~/constants/misc"
import { MediaPosterProps, MediaPostersProps } from "~/types/destructured/mediaPoster"

interface MediaCarouselProps {
    data: MediaPostersProps | undefined
    heading: string
}

const MediaCarousel = ({ data, heading }: MediaCarouselProps) => {
    if (!data || typeof data === "undefined") {
        return <div></div>
    }

    return <MediaDataFulfilled data={data.results} heading={heading} />
}

export default MediaCarousel

function MediaDataFulfilled({ data, heading }: { data: MediaPosterProps[]; heading: string }) {
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
                            </CardBody>
                        </Card>
                    )
                })}
            </CarouselSlide>
        </Carousel>
    )
}
