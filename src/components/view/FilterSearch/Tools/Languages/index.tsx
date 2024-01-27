"use client"
import { CheckIcon } from "@heroicons/react/20/solid"
import React, { ChangeEvent, useState } from "react"
import ComboBox, {
    ComboBoxButton,
    ComboBoxInput,
    ComboBoxOption,
    ComboBoxOptions,
    ComboBoxTextField,
} from "~/components/interface/ComboBox"
import Icon from "~/components/interface/Icon"
import Text from "~/components/interface/Text"
import { LanguagesProps } from "~/types/data/languages"
import { FilterLanguagesProps } from "~/types/destructured/filterSearch"

interface LanguagesListProps {
    data: FilterLanguagesProps[] | undefined
}

const Languages = ({ data }: LanguagesListProps) => {
    const [query, setQuery] = useState("")
    const [language, setLanguage] = useState(data?.find((lang) => lang.iso_639_1 === "xx") || [])

    if (typeof data === "undefined") {
        return (
            <div className="p-1">
                <Text variant="h3" className="text-danger-foreground">
                    No Language Available.
                </Text>
            </div>
        )
    }

    const filteredLanguage =
        query === ""
            ? data
            : data?.filter((lang) =>
                  lang.english_name
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, ""))
              )

    return (
        <ComboBox value={language} onChange={setLanguage}>
            <ComboBoxTextField>
                <ComboBoxInput
                    displayValue={(lang: LanguagesProps) => lang.english_name}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
                />
                <ComboBoxButton />
            </ComboBoxTextField>

            <ComboBoxOptions className="max-h-80 overflow-auto">
                {filteredLanguage?.length === 0 && query !== "" ? (
                    <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                        Nothing found.
                    </div>
                ) : (
                    filteredLanguage?.map((lang) => {
                        if (typeof lang === "boolean") {
                            return undefined
                        }

                        return (
                            <ComboBoxOption key={lang.iso_639_1} value={lang}>
                                {({ selected }: { selected: boolean }) => {
                                    return (
                                        <>
                                            <span className={selected ? "listbox__option--selected" : ""}>
                                                {lang.english_name}
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
                        )
                    })
                )}
            </ComboBoxOptions>
        </ComboBox>
    )
}

export default Languages
