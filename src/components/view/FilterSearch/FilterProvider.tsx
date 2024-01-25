"use client"
import React, { ReactNode, createContext } from "react"

export interface FilterContextProps {
    certification: string
    certification_country: string
    first_air_date_gte: string
    first_air_date_lte: string
    page: number
    release_date_gte: string
    release_date_lte: string
    sort_by: ""
    vote_average_gte: number
    vote_average_lte: number
    watch_region: string
    with_original_language: string
    with_runtime_gte: number
    with_runtime_lte: number
    with_watch_providers: string
}

const filters: FilterContextProps = {
    certification: "",
    certification_country: "",
    first_air_date_gte: "",
    first_air_date_lte: "",
    page: 1,
    release_date_gte: "",
    release_date_lte: "",
    sort_by: "",
    vote_average_gte: 0,
    vote_average_lte: 10,
    watch_region: "",
    with_original_language: "",
    with_runtime_gte: 0,
    with_runtime_lte: 400,
    with_watch_providers: "",
}

export const FilterContext = createContext<FilterContextProps>(filters)

interface FilterProviderProps {
    children: ReactNode
}

const FilterProvider = ({ children }: FilterProviderProps) => {
    return <FilterContext.Provider value={{ ...filters }}>{children}</FilterContext.Provider>
}

export default FilterProvider
