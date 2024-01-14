"use client"
import Image from "next/image"
import React, { ReactNode, useRef } from "react"
import useSWR from "swr"
import Card, { CardAction, CardMedia } from "~/components/interface/Card"
import Carousel, { CarouselButtons, CarouselSlide, CarouselTitle } from "~/components/interface/Carousel"
import useCarousel from "~/components/interface/Carousel/useCarousel"
import Link from "~/components/interface/Link"
import Spinner from "~/components/interface/Spinner"
import Text from "~/components/interface/Text"
import { IMAGE_URL } from "~/constants/misc"
import fetcher from "~/functions/fetcher"
import { MediaProps } from "~/types/data/media"
import { MovieRecommendationProps } from "~/types/data/movieRecommendations"
import { TvRecommendationProps } from "~/types/data/tvRecommendations"

interface RecommendationsProps {
    mediaId: string
    mediaType: MediaProps["media_type"]
}

type MediaRecommendations =
    | {
          backdrop_path: string
          id: string
          media_type: MediaProps["media_type"]
          title: string
      }[]
    | { id: string; backdrop_path: string; media_type: MediaProps["media_type"]; name: string }[]

const Recommendations = ({ mediaId, mediaType }: RecommendationsProps) => {
    const { data, isLoading, error } = useSWR(
        `/api/media/recommendations?id=${mediaId}&media=${mediaType}`,
        fetcher,
        {
            revalidateOnFocus: false,
        }
    )
    const ref = useRef(null)
    const { scrollLeft, scrollRight, muteNext, mutePrev } = useCarousel(ref)

    let recommendations: MediaRecommendations | undefined = undefined

    if (!isLoading && typeof data !== "undefined") {
        recommendations = data
    }

    return (
        <Carousel as="section" className="grid-rows-[max-content_minmax(min-content,1fr)]">
            <CarouselTitle heading="Recommendations" />
            <CarouselButtons
                prevProps={{ onClick: () => scrollLeft(), disabled: mutePrev }}
                nextProps={{ onClick: () => scrollRight(), disabled: muteNext }}
            />

            <CarouselSlide ref={ref}>
                {error && !isLoading ? (
                    <SomethingIsWrong>Something went wrong.</SomethingIsWrong>
                ) : isLoading ? (
                    <div className="pt-4 flex justify-center animate-pulse w-full">
                        <Spinner />
                    </div>
                ) : typeof data !== "undefined" && typeof recommendations !== "undefined" ? (
                    recommendations.map(({ id, backdrop_path, media_type, ...rec }) => {
                        if ("title" in rec) {
                            const { title } = rec
                            return (
                                <div key={id} className="basis-72 grow-0 shrink-0">
                                    <Link
                                        href={`/media/${media_type}/${id}`}
                                        title={title}
                                        className="screen-container"
                                    >
                                        <Image
                                            src={`${IMAGE_URL}w1280${backdrop_path}`}
                                            alt={title}
                                            width={900}
                                            height={600}
                                        />
                                    </Link>
                                </div>
                            )
                        }
                        const { name } = rec
                        return (
                            <div key={id} className="basis-72 grow-0 shrink-0">
                                <Link
                                    href={`/media/${media_type}/${id}`}
                                    title={name}
                                    className="screen-container"
                                >
                                    <Image
                                        src={`${IMAGE_URL}w1280${backdrop_path}`}
                                        alt={name}
                                        width={900}
                                        height={600}
                                    />
                                </Link>
                            </div>
                        )
                    })
                ) : (
                    <SomethingIsWrong>No Recommendations</SomethingIsWrong>
                )}
            </CarouselSlide>
        </Carousel>
    )
}

export default Recommendations

function SomethingIsWrong({ children }: { children: ReactNode }) {
    return (
        <div className="w-full self-stretch bg-danger-background text-danger-foreground ">
            <div className="pt-4 flex justify-center">
                <Text variant="h3">{children}</Text>
            </div>
        </div>
    )
}
