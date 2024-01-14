"use client"
import { Tab } from "@headlessui/react"
import Image from "next/image"
import React, { ReactNode } from "react"
import useSWR from "swr"
import IFrame from "~/components/interface/IFrame"
import Spinner from "~/components/interface/Spinner"
import Text from "~/components/interface/Text"
import { IMAGE_URL } from "~/constants/misc"
import fetcher from "~/functions/fetcher"
import { MediaProps } from "~/types/data/media"
import { MediaImageProps } from "~/types/data/mediaImages"
import { MediaVideoProps } from "~/types/data/mediaVideos"
import tabStyle from "./style"

const { tab, tabList, tabPanel, tabPanels, tabContainer, albumItem } = tabStyle()

type AlbumProps = {
    images: {
        backdrops: MediaImageProps[]
        posters: MediaImageProps[]
    }
    videos: MediaVideoProps[]
}

interface MediaAlbumProps {
    mediaType: MediaProps["media_type"]
    mediaId: string
}

const MediaAlbum = ({ mediaId, mediaType }: MediaAlbumProps) => {
    const { data, error, isLoading } = useSWR(`/api/media/album?media=${mediaType}&id=${mediaId}`, fetcher, {
        revalidateOnFocus: false,
    })

    let album: AlbumProps | undefined = undefined

    if (!isLoading && typeof data !== "undefined") {
        album = data
    }

    return (
        <section className={tabContainer()}>
            <Tab.Group>
                <Text as="h2" variant="h2" className="2xl:col-[1/2] 2xl:row-[1/2]">
                    Medias
                </Text>

                <Tab.List className={tabList()}>
                    <Tab className={({ selected }: { selected: boolean }) => tab({ selected })}>Backdrop</Tab>
                    <Tab className={({ selected }: { selected: boolean }) => tab({ selected })}>Poster</Tab>
                    <Tab className={({ selected }: { selected: boolean }) => tab({ selected })}>Videos</Tab>
                </Tab.List>

                {error ? (
                    <SomethingIsWrong>Something went wrong.</SomethingIsWrong>
                ) : isLoading ? (
                    <div className="col-span-full 2xl:row-[2/3] self-stretch animate-pulse grid">
                        <div className="bg-background-light pt-4 flex justify-center">
                            <Spinner />
                        </div>
                    </div>
                ) : typeof data !== "undefined" && typeof album !== "undefined" ? (
                    <Tab.Panels className={tabPanels()}>
                        <Tab.Panel className={tabPanel()}>
                            <div className={albumItem()}>
                                {album.images.backdrops.map(({ file_path }) => (
                                    <div
                                        key={file_path}
                                        className="relative basis-96 shrink-0 grow-0 aspect-video"
                                    >
                                        <Image
                                            src={`${IMAGE_URL}w1280${file_path}`}
                                            alt=""
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                ))}
                            </div>
                        </Tab.Panel>

                        <Tab.Panel className={tabPanel()}>
                            <div className={albumItem()}>
                                {album.images.posters.map(({ file_path }) => (
                                    <div
                                        key={file_path}
                                        className="relative basis-44 shrink-0 grow-0 aspect-portrait"
                                    >
                                        <Image
                                            src={`${IMAGE_URL}w500${file_path}`}
                                            alt=""
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                ))}
                            </div>
                        </Tab.Panel>

                        <Tab.Panel className={tabPanel()}>
                            <div className={albumItem()}>
                                {album.videos.map(({ id, key }) => (
                                    <div key={id} className="basis-96 shrink-0 grow-0 aspect-video">
                                        <IFrame videoId={key} className="w-full" />
                                    </div>
                                ))}
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                ) : (
                    <SomethingIsWrong>No images/videos available</SomethingIsWrong>
                )}
            </Tab.Group>
        </section>
    )
}

export default MediaAlbum

function SomethingIsWrong({ children }: { children: ReactNode }) {
    return (
        <div className="col-span-full 2xl:row-[2/3] self-stretch bg-danger-background text-danger-foreground ">
            <div className="pt-4 flex justify-center">
                <Text variant="h3">{children}</Text>
            </div>
        </div>
    )
}
