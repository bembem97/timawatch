"use client"
import React, { useState } from "react"
import Dialog, { DialogOverlay, DialogPanel } from "../interface/Dialog"
import Button from "../interface/Button"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import Container from "../interface/Container"
import Text from "../interface/Text"

const Modal = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const closeHandler = () => setIsOpen(false)
    const openHandler = () => setIsOpen(true)

    return (
        <>
            <Button color="accent" iconStart={MagnifyingGlassIcon} onClick={openHandler}>
                Open Modal
            </Button>

            <Dialog show={isOpen} onClose={closeHandler}>
                <DialogOverlay />
                <DialogPanel onClose={closeHandler}>
                    <Container>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, animi dolorem
                            optio voluptatum consectetur minus voluptate quidem architecto deleniti earum
                            officiis iure nam? Dolorem consequatur nemo a quisquam perspiciatis saepe?
                        </Text>
                    </Container>
                </DialogPanel>
            </Dialog>
        </>
    )
}

export default Modal
