"use client"
import React, { ComponentPropsWithoutRef } from "react"
import FormControl from "~/components/interface/TextField/FormControl"
import SearchInput from "./SearchInput"
import SearchResult from "./SearchResult"
import ComboBox, { ComboBoxButton } from "~/components/interface/ComboBox"
import useSearchQuery from "./useSearchQuery"

interface SearchProps extends ComponentPropsWithoutRef<"div"> {}

const Search = ({ ...rest }: SearchProps) => {
    const { search, setSearch, isLoading, isError, data } = useSearchQuery()

    const className = rest.className
    return (
        <ComboBox onChange={setSearch} value={search} className={className}>
            <FormControl className="w-full gap-1 p-1">
                <SearchInput setSearch={setSearch} />
                <ComboBoxButton />
            </FormControl>

            <SearchResult
                isLoading={isLoading}
                isError={isError}
                data={data}
                className="bg-background-light"
                inComponent="dropdown"
            />
        </ComboBox>
    )
}

export default Search
