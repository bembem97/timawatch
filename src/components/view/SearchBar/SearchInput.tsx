import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import Input from "~/components/interface/TextField/Input"
import { useDebounce } from "~/hooks/useDebounce"

interface SearchInputProps {
    setSearch: Dispatch<SetStateAction<string>>
}

const SearchInput = ({ setSearch }: SearchInputProps) => {
    const [searchInput, setSearchInput] = useState("")
    const debounce = useDebounce(searchInput)
    const target = useRef<HTMLInputElement | null>(null)

    useEffect(() => setSearch(debounce), [debounce, setSearch])

    useEffect(() => {
        if (target.current) {
            target.current.focus()
        }
    }, [target])

    return (
        <Input
            ref={target}
            type="search"
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search for movies, tv shows, and celebrities..."
        />
    )
}

export default SearchInput
