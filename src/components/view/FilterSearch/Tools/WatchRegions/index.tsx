"use client"
import { CheckIcon } from "@heroicons/react/20/solid"
import React, { ChangeEvent, useContext, useEffect, useRef, useState } from "react"
import ComboBox, {
    ComboBoxButton,
    ComboBoxInput,
    ComboBoxOption,
    ComboBoxOptions,
    ComboBoxTextField,
} from "~/components/interface/ComboBox"
import Icon from "~/components/interface/Icon"
import { useDebounce } from "~/hooks/useDebounce"
import { WatchProviderContext } from "../WatchProvider"

type WatchRegionProps = {
    english_name: string
    iso_3166_1: string
}

export type WatchRegionsProps = {
    regions: WatchRegionProps[] | undefined
}

interface InterfaceWatchRegions {
    watchRegion: WatchRegionsProps
    countryCode: string
}

const WatchRegions = ({ watchRegion, countryCode }: InterfaceWatchRegions) => {
    const regions = watchRegion?.regions

    const [query, setQuery] = useState("")
    const [region, setRegion] = useState(regions?.find((region) => region.iso_3166_1 === countryCode))
    const { setSelectedRegion } = useContext(WatchProviderContext)

    useEffect(() => {
        if (region?.iso_3166_1) {
            setSelectedRegion(region?.iso_3166_1)
        }
    }, [region, setSelectedRegion])

    const filteredRegion =
        query === ""
            ? regions
            : regions?.filter((region) =>
                  region.english_name
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, ""))
              )

    return (
        <>
            <ComboBox value={region} onChange={setRegion}>
                <ComboBoxTextField>
                    <ComboBoxInput
                        displayValue={(region: WatchRegionProps) => region.english_name}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
                    />
                    <ComboBoxButton />
                </ComboBoxTextField>

                <ComboBoxOptions className="max-h-80 overflow-auto">
                    {filteredRegion?.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                            Nothing found.
                        </div>
                    ) : (
                        filteredRegion?.map((region) => (
                            <ComboBoxOption key={region.iso_3166_1} value={region}>
                                {({ selected }: { selected: boolean }) => {
                                    return (
                                        <>
                                            <span className={selected ? "listbox__option--selected" : ""}>
                                                {region.english_name}
                                            </span>

                                            {selected ? (
                                                <span className="listbox__option--checked">
                                                    <Icon icon={CheckIcon} aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )
                                }}
                            </ComboBoxOption>
                        ))
                    )}
                </ComboBoxOptions>
            </ComboBox>
        </>
    )
}

export default WatchRegions
