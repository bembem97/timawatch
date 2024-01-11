import React, {
    ComponentPropsWithRef,
    Dispatch,
    SetStateAction,
    forwardRef,
    useEffect,
    useState,
} from "react"
import { ComboBoxInput } from "~/components/interface/ComboBox"
import { useDebounce } from "~/hooks/useDebounce"

interface SearchInputProps extends ComponentPropsWithRef<"input"> {
    setSearch: Dispatch<SetStateAction<string | undefined | null>>
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(({ setSearch, ...rest }, ref) => {
    const [searchInput, setSearchInput] = useState(null)
    const debounce = useDebounce(searchInput)

    useEffect(() => setSearch(debounce), [debounce, setSearch])

    return (
        <ComboBoxInput
            {...rest}
            ref={ref}
            placeholder="Search..."
            type="search"
            onChange={(e: any) => setSearchInput(e.target.value)}
            className="pr-0.5"
        />
    )
})

SearchInput.displayName = "SearchInput"

export default SearchInput
