"use client"
import { MagnifyingGlassIcon, PlayIcon } from "@heroicons/react/20/solid"
import React, { ComponentPropsWithoutRef, useState } from "react"
import Button from "~/components/interface/Button"
import ContainerBox from "~/components/interface/ContainerBox"
import Dialog, { DialogOverlay, DialogPanel } from "~/components/interface/Dialog"

type WatchVideoProps = ComponentPropsWithoutRef<typeof Button>

const WatchVideo = ({ ...rest }: WatchVideoProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const closeHandler = () => setIsOpen(false)
    const openHandler = () => setIsOpen(true)

    return (
        <>
            <Button {...rest} iconStart={PlayIcon} onClick={openHandler} variant="filled" color="accent">
                Trailer
            </Button>

            <Dialog show={isOpen} onClose={closeHandler}>
                <DialogOverlay />
                <DialogPanel onClose={closeHandler}>
                    <ContainerBox>
                        <div className="aspect-video w-full bg-background-dark"></div>
                    </ContainerBox>
                </DialogPanel>
            </Dialog>
        </>
    )
}

export default WatchVideo
