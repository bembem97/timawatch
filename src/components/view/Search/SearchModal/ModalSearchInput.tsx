"use client"
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react"
import SearchInput from "../SearchInput"

type ModalSearchInputProps = { setSearch: Dispatch<SetStateAction<string | null | undefined>> }

const ModalSearchInput = ({ setSearch }: ModalSearchInputProps) => {
    const targetRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        if (targetRef.current) {
            targetRef.current.focus()
        }
    }, [targetRef])

    return <SearchInput setSearch={setSearch} ref={targetRef} />
}

export default ModalSearchInput
