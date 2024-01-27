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
import DateRelease from "./Tools/DateRelease"
import Genres from "./Tools/Genres"
import Certifications from "./Tools/Certifications"
import Languages from "./Tools/Languages"
import UserScore from "./Tools/UserScore"

const { base } = style()

export interface FilterToolsProps {
    sortedBy: string
    mediaType: MediaProps["media_type"]
    filters: FilterProps
}

const FilterTools = ({ filters, mediaType, sortBy }: FilterProps) => {
    const { country_code, certifications, genres, languages, watchRegion, dates } = filters

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

            {/* //todo: release date / first air date */}
            <div>
                <DateRelease dates={dates} />
            </div>

            {/* //todo: genres */}
            <div>
                <Genres data={genres} />
            </div>

            {/* //todo: certifications */}
            <div>
                <Certifications data={certifications} />
            </div>

            {/* //todo: languages */}
            <div>
                <Languages data={languages} />
            </div>

            {/* //todo: user score */}
            <div>
                <UserScore />
            </div>
        </div>
    )
}

export default FilterTools
