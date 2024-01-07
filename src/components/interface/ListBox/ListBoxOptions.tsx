import React, { ComponentPropsWithoutRef, Fragment } from "react"
import { Listbox as ListBoxUI, Transition } from "@headlessui/react"
import style from "./style"

const { listboxOptions } = style()

type ListBoxOptionsProps = ComponentPropsWithoutRef<typeof ListBoxUI.Options>

const ListBoxOptions = ({ children, ...rest }: ListBoxOptionsProps) => {
    const className = rest.className

    return (
        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <ListBoxUI.Options {...rest} className={listboxOptions({ className })}>
                {children}
            </ListBoxUI.Options>
        </Transition>
    )
}

export default ListBoxOptions
