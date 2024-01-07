import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import React, { ComponentPropsWithoutRef } from "react"
import FormControl, { FormButton, Input } from "~/components/interface/TextField/FormControl"
import style from "./style"

const { base } = style()

interface SearchBarProps extends ComponentPropsWithoutRef<"div"> {}

const SearchBar = ({ ...rest }: SearchBarProps) => {
    const className = rest.className
    return (
        <div className={base({ className })}>
            <FormControl>
                <Input type="search" placeholder="Type something..." />
                <FormButton iconStart={MagnifyingGlassIcon} />
            </FormControl>
        </div>
    )
}

export default SearchBar
