import React, { ComponentPropsWithoutRef } from "react"
import { Combobox as ComboBoxUI } from "@headlessui/react"
import style from "./style"

const { input } = style()

type ComboBoxInputProps = ComponentPropsWithoutRef<typeof ComboBoxUI.Input>

const ComboBoxInput = ({ children, ...rest }: ComboBoxInputProps) => {
    const className = rest.className

    return <ComboBoxUI.Input {...rest} className={input({ className })} />
}

export default ComboBoxInput
