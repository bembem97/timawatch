"use client"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import React, { ComponentPropsWithoutRef, useState } from "react"
import Button from "~/components/interface/Button"
import ContainerBox from "~/components/interface/ContainerBox"
import Dialog, { DialogOverlay, DialogPanel } from "~/components/interface/Dialog"
import Text from "~/components/interface/Text"
import SearchBar from "."
import Search from "."
import ComboBox, { ComboBoxButton } from "~/components/interface/ComboBox"
import FormControl from "~/components/interface/TextField/FormControl"
import SearchInput from "./SearchInput"
import SearchResult from "./SearchResult"
import useSearchQuery from "./useSearchQuery"

type SearchModalProps = ComponentPropsWithoutRef<typeof Button>

const SearchModal = ({ ...rest }: SearchModalProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const { search, setSearch, isLoading, isError, data } = useSearchQuery()

    const closeHandler = () => setIsOpen(false)
    const openHandler = () => setIsOpen(true)

    return (
        <>
            <Button {...rest} iconStart={MagnifyingGlassIcon} onClick={openHandler} />

            <Dialog show={isOpen} onClose={closeHandler}>
                <DialogOverlay />
                <DialogPanel
                    onClose={closeHandler}
                    className="flex flex-col"
                    outerPanelProps={{ className: "w-[clamp(280px,90vw,900px)] aspect-portrait" }}
                    closeButtonProps={{ className: "basis-auto grow-0 shrink-0 self-end" }}
                >
                    <ContainerBox className="grow shrink-0 basis-auto h-0 pb-2">
                        <ComboBox
                            onChange={setSearch}
                            value={search}
                            className="grid grid-cols-1 grid-rows-[auto_1fr] h-full"
                        >
                            <FormControl className="w-full gap-1 p-1">
                                <SearchInput setSearch={setSearch} />
                                <ComboBoxButton />
                            </FormControl>

                            <SearchResult
                                isLoading={isLoading}
                                isError={isError}
                                data={data}
                                className="bg-background relative"
                                inComponent="modal"
                            />
                        </ComboBox>
                    </ContainerBox>
                </DialogPanel>
            </Dialog>
        </>
    )
}

export default SearchModal
