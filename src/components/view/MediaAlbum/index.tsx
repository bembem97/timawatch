"use client"
import { Tab } from "@headlessui/react"
import React from "react"
import Text from "~/components/interface/Text"
import { MediaImageDataProps } from "~/types/data/mediaImages"
import { MediaVideosDataProps } from "~/types/data/mediaVideos"

interface MediaAlbumProps {
    images: Omit<MediaImageDataProps, "id">
    videos: Omit<MediaVideosDataProps, "id">
}

const MediaAlbum = ({ images, videos }: MediaAlbumProps) => {
    // console.log("images", images)
    // console.log("videos", videos)
    return (
        <section className="tab__container px-0 grid items-center grid-cols-1 2xl:grid-cols-[max-content_1fr] grid-rows-[repeat(2,max-content)_minmax(10rem,1fr)] 2xl:grid-rows-[max-content_minmax(10rem,1fr)]">
            <Tab.Group>
                <Text as="h2" variant="h2" className="2xl:col-[1/2] 2xl:row-[1/2]">
                    Medias
                </Text>
                <Tab.List className="tab__list 2xl:col-[2/3] 2xl:row-[1/2] 2xl:ml-6 px-0">
                    <Tab className="tab">Videos</Tab>
                    <Tab className="tab">Backdrop</Tab>
                    <Tab className="tab">Poster</Tab>
                </Tab.List>

                <Tab.Panels className="col-span-full 2xl:row-[2/3] self-stretch bg-background-light">
                    <Tab.Panel>Video</Tab.Panel>
                    <Tab.Panel>Backdrop</Tab.Panel>
                    <Tab.Panel>Poster</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </section>
    )
}

export default MediaAlbum
