import React, { ComponentPropsWithoutRef, Fragment } from "react"
import { Combobox as ComboBoxUI, Transition } from "@headlessui/react"
import style from "./style"

const { options } = style()

type ComboBoxOptionsProps = ComponentPropsWithoutRef<typeof ComboBoxUI.Options>

const ComboBoxOptions = ({ children, ...rest }: ComboBoxOptionsProps) => {
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
            <ComboBoxUI.Options {...rest} className={options({ className })}>
                {children}
            </ComboBoxUI.Options>
        </Transition>
    )
}

export default ComboBoxOptions
