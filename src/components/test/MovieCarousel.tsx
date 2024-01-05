"use client"
import React, { useRef } from "react"
import Carousel, { CarouselButtons, CarouselSlide, CarouselTitle } from "../interface/Carousel"
import useCarousel from "../interface/Carousel/useCarousel"

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

                <CarouselSlide ref={ref} className="bg-background" />
            </Carousel>
        </>
    )
}

export default MovieCarousel
