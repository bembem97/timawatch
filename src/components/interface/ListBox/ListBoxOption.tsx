import React, { ComponentPropsWithoutRef } from "react"
import { Listbox as ListBoxUI } from "@headlessui/react"
import style from "./style"

const { listboxOption } = style()

type ListBoxOptionProps = ComponentPropsWithoutRef<typeof ListBoxUI.Option>

const ListBoxOption = ({ children, ...rest }: ListBoxOptionProps) => {
    const className = rest.className

    return (
        <ListBoxUI.Option {...rest} className={listboxOption({ className })}>
            {children}
        </ListBoxUI.Option>
    )
}

export default ListBoxOption
