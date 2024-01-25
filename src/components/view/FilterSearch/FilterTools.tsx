"use client"
import React, { useContext, useState } from "react"
import { FilterContext } from "./FilterProvider"
import style from "./style"
import { sortBy } from "./constants"
import SortBy from "./Tools/SortBy"
import WatchRegions, { WatchRegionsProps } from "./Tools/WatchRegions"
import WatchProviders, { WatchProvidersProps } from "./Tools/WatchProviders"
import WatchProvider from "./Tools/WatchProvider"
import { MediaProps } from "~/types/data/media"
import { FilterToolsProps as FilterProps } from "~/types/destructured/filterSearch"

const { base } = style()

export interface FilterToolsProps {
    sortedBy: string
    mediaType: MediaProps["media_type"]
    filters: FilterProps
}

const FilterTools = ({ filters, mediaType, sortBy }: FilterProps) => {
    const { country_code, certifications, genres, languages, watchRegion } = filters

    return (
        <div className={base()}>
            {/* //todo: sort */}
            <div className="">
                <SortBy sortedBy={sortBy} />
            </div>

            {/* //todo: where to watch */}
            <div>
                <WatchProvider>
                    <WatchRegions watchRegion={watchRegion} countryCode={country_code} />
                    <WatchProviders mediaType={mediaType} />
                </WatchProvider>
            </div>
        </div>
    )
}

export default FilterTools
