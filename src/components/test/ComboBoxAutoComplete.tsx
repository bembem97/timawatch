"use client"
import React, { useState } from "react"
import ComboBox, {
    ComboBoxButton,
    ComboBoxInput,
    ComboBoxOption,
    ComboBoxOptions,
    ComboBoxTextField,
} from "../interface/ComboBox"
import { CheckIcon } from "@heroicons/react/20/solid"
import Icon from "../interface/Icon"

const people = [
    { id: 1, name: "Wade Cooper" },
    { id: 2, name: "Arlene Mccoy" },
    { id: 3, name: "Devon Webb" },
    { id: 4, name: "Tom Cook" },
    { id: 5, name: "Tanya Fox" },
    { id: 6, name: "Hellen Schmidt" },
]

const ComboBoxAutoComplete = () => {
    const [selected, setSelected] = useState(people[0])
    const [query, setQuery] = useState("")

    const filteredPeople =
        query === ""
            ? people
            : people.filter((person) =>
                  person.name
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, ""))
              )

    return (
        <ComboBox value={selected} onChange={setSelected}>
            <ComboBoxTextField>
                <ComboBoxInput
                    displayValue={(person: any) => person.name}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <ComboBoxButton />
            </ComboBoxTextField>

            <ComboBoxOptions>
                {filteredPeople.length === 0 && query !== "" ? (
                    <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                        Nothing found.
                    </div>
                ) : (
                    filteredPeople.map((person) => (
                        <ComboBoxOption
                            key={person.id}
                            className={({ active }: { active: boolean }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active ? "bg-teal-600 text-white" : "text-gray-900"
                                }`
                            }
                            value={person}
                        >
                            {({ selected, active }) => (
                                <>
                                    <span className={selected ? "combobox__option--selected" : ""}>
                                        {person.name}
                                    </span>
                                    {selected ? (
                                        <span className="combobox__option--checked">
                                            <Icon icon={CheckIcon} aria-hidden="true" />
                                        </span>
                                    ) : null}
                                </>
                            )}
                        </ComboBoxOption>
                    ))
                )}
            </ComboBoxOptions>
        </ComboBox>
    )
}

export default ComboBoxAutoComplete
