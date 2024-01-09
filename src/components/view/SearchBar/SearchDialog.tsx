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
                <DialogPanel
                    onClose={closeHandler}
                    outerPanelProps={{ className: "w-[clamp(350px,90vw,900px)] aspect-portrait" }}
                >
                    <ContainerBox className="grid grid-rows-1 grid-cols-1 pb-2">
                        <SearchBar className="grid grid-cols-1 grid-rows-[max-content_1fr] gap-y-2" />
                    </ContainerBox>
                </DialogPanel>
            </Dialog>
        </>
    )
}

export default SearchDialog
