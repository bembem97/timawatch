import React, { ComponentPropsWithoutRef } from "react"
import { Listbox as ListBoxUI } from "@headlessui/react"
import style from "./style"

const { listboxOptions } = style()

type ListBoxOptionsProps = ComponentPropsWithoutRef<typeof ListBoxUI.Options>

const ListBoxOptions = ({ children, ...rest }: ListBoxOptionsProps) => {
    const className = rest.className

    return (
        <ListBoxUI.Options {...rest} className={listboxOptions({ className })}>
            {children}
        </ListBoxUI.Options>
    )
}

export default ListBoxOptions
