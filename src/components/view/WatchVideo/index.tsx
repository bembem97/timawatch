"use client"
import { PlayIcon } from "@heroicons/react/20/solid"
import React, { ComponentPropsWithoutRef, useState } from "react"
import Button from "~/components/interface/Button"
import ContainerBox from "~/components/interface/ContainerBox"
import Dialog, { DialogOverlay, DialogPanel } from "~/components/interface/Dialog"
import useSWR from "swr"
import { MediaProps } from "~/types/data/media"
import fetcher from "~/functions/fetcher"
import Spinner from "~/components/interface/Spinner"
import Text from "~/components/interface/Text"
import IFrame from "~/components/interface/IFrame"

type WatchVideoProps = ComponentPropsWithoutRef<typeof Button> & {
    mediaId: number
    mediaType: MediaProps["media_type"]
}

const WatchVideo = ({ mediaId, mediaType, ...rest }: WatchVideoProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const {
        isLoading,
        error: isError,
        data: videoData,
    } = useSWR(isOpen ? `/api/media/videos?media=${mediaType}&id=${mediaId}` : null, fetcher)

    const closeHandler = () => setIsOpen(false)
    const openHandler = () => setIsOpen(true)

    return (
        <>
            <Button {...rest} iconStart={PlayIcon} onClick={openHandler}>
                Trailer
            </Button>

            <Dialog show={isOpen} onClose={closeHandler}>
                <DialogOverlay />
                <DialogPanel
                    onClose={closeHandler}
                    outerPanelProps={{
                        className: "w-[clamp(280px,90vw,900px)] aspect-portrait 2xl:aspect-[16/10]",
                    }}
                >
                    <ContainerBox className="pb-2">
                        {!isLoading && isError ? (
                            <NoVideoAvailable />
                        ) : isLoading ? (
                            <div className="flex justify-center py-4">
                                <Spinner />
                            </div>
                        ) : typeof videoData !== "undefined" ? (
                            <IFrame className="w-full h-full rounded-lg" videoId={videoData.key} />
                        ) : (
                            // <iframe
                            //     className="w-full h-full rounded-lg"
                            //     allowFullScreen
                            //     width={650}
                            //     height={315}
                            //     title="YouTube video player"
                            //     src={`https://www.youtube.com/embed/${videoData.key}`}
                            //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            // />
                            <NoVideoAvailable />
                        )}
                    </ContainerBox>
                </DialogPanel>
            </Dialog>
        </>
    )
}

export default WatchVideo

function NoVideoAvailable() {
    return (
        <div className="flex justify-center py-4">
            <Text variant="h3" className="text-danger-foreground">
                No Video Available.
            </Text>
        </div>
    )
}
