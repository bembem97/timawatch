"use client"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import React, { ComponentPropsWithoutRef, useState } from "react"
import Button from "~/components/interface/Button"
import ContainerBox from "~/components/interface/ContainerBox"
import Dialog, { DialogOverlay, DialogPanel } from "~/components/interface/Dialog"
import Text from "~/components/interface/Text"
import SearchBar from "."

type SearchDialogProps = ComponentPropsWithoutRef<typeof Button>

const SearchDialog = ({ ...rest }: SearchDialogProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const closeHandler = () => setIsOpen(false)
    const openHandler = () => setIsOpen(true)

    return (
        <>
            <Button {...rest} iconStart={MagnifyingGlassIcon} onClick={openHandler} />

            <Dialog show={isOpen} onClose={closeHandler}>
                <DialogOverlay />
                <DialogPanel onClose={closeHandler}>
                    <ContainerBox>
                        <SearchBar className="grid" />

                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, animi dolorem
                            optio voluptatum consectetur minus voluptate quidem architecto deleniti earum
                            officiis iure nam? Dolorem consequatur nemo a quisquam perspiciatis saepe?
                        </Text>
                    </ContainerBox>
                </DialogPanel>
            </Dialog>
        </>
    )
}

export default SearchDialog
