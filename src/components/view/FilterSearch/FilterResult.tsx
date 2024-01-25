"use client"
import React, { useContext } from "react"
import { FilterContext } from "./FilterProvider"

const FilterResult = () => {
    const { with_runtime_gte, with_runtime_lte } = useContext(FilterContext)
    return (
        <div>
            <div className="">Duration {with_runtime_gte}</div>
        </div>
    )
}

export default FilterResult
