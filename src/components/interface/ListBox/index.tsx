import React, { ComponentPropsWithoutRef } from "react"
import { Listbox as ListBoxUI } from "@headlessui/react"
import style from "./style"

const { base } = style()

type ListBoxProps = ComponentPropsWithoutRef<typeof ListBoxUI>

const ListBox = ({ children, ...rest }: ListBoxProps) => {
    const className = rest.className

    return (
        <ListBoxUI {...rest} as="div" className={base({ className })}>
            {children}
        </ListBoxUI>
    )
}

export default ListBox
