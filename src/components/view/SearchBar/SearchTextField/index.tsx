"use client"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import React, { ComponentPropsWithoutRef, FormEvent, useState } from "react"
import FormControl, { FormButton } from "~/components/interface/TextField/FormControl"
import fetcher from "~/functions/fetcher"
import useSWR from "swr"
import style from "../style"
import SearchInput from "../SearchInput"
import SearchResult from "../SearchResult"
import hasLength from "~/functions/hasLength"

const { base, textfieldResult } = style()

interface SearchTextFieldProps extends ComponentPropsWithoutRef<"div"> {}

const SearchTextField = ({ ...rest }: SearchTextFieldProps) => {
    const [search, setSearch] = useState("")
    const { isLoading, error, data } = useSWR(search ? `/api/media/search?query=${search}` : null, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        keepPreviousData: true,
    })

    const submitHandler = (e: FormEvent<HTMLFormElement>) => e.preventDefault()
    const className = rest.className
    const hasValue = hasLength(search)

    return (
        <div className={base({ className })}>
            <form onSubmit={submitHandler} className="p-px">
                <FormControl className="w-full">
                    <SearchInput setSearch={setSearch} />
                    <FormButton iconStart={MagnifyingGlassIcon} />
                </FormControl>
            </form>

            {hasValue && (
                <SearchResult
                    isLoading={isLoading}
                    isError={error}
                    data={data}
                    className={textfieldResult()}
                />
            )}
        </div>
    )
}

export default SearchTextField
