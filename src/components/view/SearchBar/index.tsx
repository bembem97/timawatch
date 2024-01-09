"use client"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import React, { ComponentPropsWithoutRef, FormEvent, useState } from "react"
import FormControl, { FormButton, Input } from "~/components/interface/TextField/FormControl"
import style from "./style"
import fetcher from "~/functions/fetcher"
import useSWR from "swr"
import SearchInput from "./SearchInput"
import SearchResult from "./SearchResult"

const { base } = style()

interface SearchBarProps extends ComponentPropsWithoutRef<"div"> {}

const SearchBar = ({ ...rest }: SearchBarProps) => {
    const [search, setSearch] = useState("")
    const { isLoading, error, data } = useSWR(search ? `/api/media/search?query=${search}` : null, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        keepPreviousData: true,
    })

    const submitHandler = (e: FormEvent<HTMLFormElement>) => e.preventDefault()

    const className = rest.className
    return (
        <div className={base({ className })}>
            <form onSubmit={submitHandler}>
                <FormControl className="w-full">
                    <SearchInput setSearch={setSearch} />
                    <FormButton iconStart={MagnifyingGlassIcon} />
                </FormControl>
            </form>

            <SearchResult isLoading={isLoading} isError={error} data={data} />
        </div>
    )
}

export default SearchBar
