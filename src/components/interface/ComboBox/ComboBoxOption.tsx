import React, { ComponentPropsWithoutRef, forwardRef } from "react"
import { Combobox as ComboBoxUI } from "@headlessui/react"
import style from "./style"

const { option } = style()

type ComboBoxOptionProps = ComponentPropsWithoutRef<typeof ComboBoxUI.Option>

const ComboBoxOption = forwardRef<HTMLLIElement, ComboBoxOptionProps>(({ children, ...rest }, ref) => {
    const className = rest.className

    return (
        <ComboBoxUI.Option {...rest} ref={ref} className={option({ className })}>
            {children}
        </ComboBoxUI.Option>
    )
})

ComboBoxOption.displayName = "ComboBoxOption"

export default ComboBoxOption
