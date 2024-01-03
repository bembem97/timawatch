"use client"
import React, { useState } from "react"
import ListBoxButton from "../interface/ListBox/ListBoxButton"
import ListBoxOptions from "../interface/ListBox/ListBoxOptions"
import ListBox from "../interface/ListBox"
import ListBoxOption from "../interface/ListBox/ListBoxOption"
import { CheckIcon } from "@heroicons/react/20/solid"
import Icon from "../interface/Icon"

const people = [
    { id: 1, name: "Durward Reynolds", unavailable: false },
    { id: 2, name: "Kenton Towne", unavailable: false },
    { id: 3, name: "Therese Wunsch", unavailable: false },
    { id: 4, name: "Benedict Kessler", unavailable: true },
    { id: 5, name: "Katelyn Rohan", unavailable: false },
]

const ListBoxSelector = () => {
    const [selectedPerson, setSelectedPerson] = useState(people[0])

    return (
        <ListBox value={selectedPerson} onChange={setSelectedPerson}>
            <ListBoxButton>{selectedPerson.name}</ListBoxButton>
            <ListBoxOptions className="w-max">
                {people.map((person) => (
                    <ListBoxOption key={person.id} value={person} disabled={person.unavailable}>
                        {({ selected }: { selected: boolean }) => (
                            <>
                                <span className={selected ? "listbox__option--selected" : ""}>
                                    {person.name}
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

export default ListBoxSelector
