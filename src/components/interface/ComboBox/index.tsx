import React, { ComponentPropsWithoutRef } from "react"
import { Combobox as ComboBoxUI } from "@headlessui/react"
import style from "./style"
import ComboBoxButton from "./ComboBoxButton"
import ComboBoxInput from "./ComboBoxInput"
import ComboBoxOption from "./ComboBoxOption"
import ComboBoxOptions from "./ComboBoxOptions"
import ComboBoxTextField from "./ComboBoxTextField"

const { base } = style()

type ComboBoxProps = ComponentPropsWithoutRef<typeof ComboBoxUI>

const ComboBox = ({ children, ...rest }: ComboBoxProps) => {
    const className = rest.className

    return (
        <ComboBoxUI {...rest} as="div" className={base({ className })}>
            {children}
        </ComboBoxUI>
    )
}

export default ComboBox
export { ComboBoxButton, ComboBoxInput, ComboBoxOption, ComboBoxOptions, ComboBoxTextField }
