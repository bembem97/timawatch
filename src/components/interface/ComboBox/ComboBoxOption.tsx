import React, { ComponentPropsWithoutRef } from "react"
import { Combobox as ComboBoxUI } from "@headlessui/react"
import style from "./style"

const { option } = style()

type ComboBoxOptionProps = ComponentPropsWithoutRef<typeof ComboBoxUI.Option>

const ComboBoxOption = ({ children, ...rest }: ComboBoxOptionProps) => {
    const className = rest.className

    return (
        <ComboBoxUI.Option {...rest} className={option({ className })}>
            {children}
        </ComboBoxUI.Option>
    )
}

export default ComboBoxOption
