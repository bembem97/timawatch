"use client"
import React, { useState } from "react"
import { sortBy } from "../constants"
import ListBox from "~/components/interface/ListBox"
import ListBoxButton from "~/components/interface/ListBox/ListBoxButton"
import ListBoxOptions from "~/components/interface/ListBox/ListBoxOptions"
import ListBoxOption from "~/components/interface/ListBox/ListBoxOption"
import Icon from "~/components/interface/Icon"
import { CheckIcon } from "@heroicons/react/20/solid"

interface SortByProps {
    sortedBy: string
}

const SortBy = ({ sortedBy }: SortByProps) => {
    const byRatings = sortBy.find((sorted) => sorted.value === "vote_average.desc")
    const byPopularity = sortBy[1]
    const status = sortedBy === "top-rated" ? byRatings : byPopularity

    const [sort, setSort] = useState(status)

    return (
        <ListBox value={sort} onChange={setSort}>
            <ListBoxButton>{sort?.label}</ListBoxButton>
            <ListBoxOptions>
                {sortBy.map((sorts) => (
                    <ListBoxOption key={sorts.label} value={sorts}>
                        {({ selected }: { selected: boolean }) => (
                            <>
                                <span className={selected ? "listbox__option--selected" : ""}>
                                    {sorts.label}
                                </span>

                                {selected ? (
                                    <span className="listbox__option--checked">
                                        <Icon icon={CheckIcon} aria-hidden="true" />
                                    </span>
                                ) : null}
                            </>
                        )}
                    </ListBoxOption>
                ))}
            </ListBoxOptions>
        </ListBox>
    )
}

export default SortBy
