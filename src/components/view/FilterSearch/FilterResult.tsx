"use client"
import React, { useContext } from "react"
import { FilterContext } from "./FilterProvider"
import Text from "~/components/interface/Text"

const FilterResult = () => {
    const context = useContext(FilterContext)

    if (typeof context === "undefined") {
        return (
            <div>
                <Text variant="h2">Something went wrong.</Text>
            </div>
        )
    }

    const { data, isError, isLoading } = context

    return (
        <div>
            <div className="">Duration </div>
        </div>
    )
}

export default FilterResult
