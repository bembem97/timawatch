import React, { ComponentPropsWithoutRef } from "react"
import { Combobox as ComboBoxUI } from "@headlessui/react"
import style from "./style"

const { options } = style()

type ComboBoxOptionsProps = ComponentPropsWithoutRef<typeof ComboBoxUI.Options>

const ComboBoxOptions = ({ children, ...rest }: ComboBoxOptionsProps) => {
    const className = rest.className

    return (
        <ComboBoxUI.Options {...rest} className={options({ className })}>
            {children}
        </ComboBoxUI.Options>
    )
}

export default ComboBoxOptions
