import React, { ComponentPropsWithRef, Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { ComboBoxInput } from "~/components/interface/ComboBox"
import { useDebounce } from "~/hooks/useDebounce"

interface SearchInputProps extends ComponentPropsWithRef<"input"> {
    setSearch: Dispatch<SetStateAction<string | undefined | null>>
}

const SearchInput = ({ setSearch, ...rest }: SearchInputProps) => {
    const [searchInput, setSearchInput] = useState(null)
    const debounce = useDebounce(searchInput)
    const targetRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => setSearch(debounce), [debounce, setSearch])

    useEffect(() => {
        if (targetRef.current) {
            targetRef.current.focus()
        }
    }, [targetRef])

    return (
        <ComboBoxInput
            {...rest}
            ref={targetRef}
            placeholder="Search..."
            type="search"
            onChange={(e: any) => setSearchInput(e.target.value)}
        />
    )
}

export default SearchInput
