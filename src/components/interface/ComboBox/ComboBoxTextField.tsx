import React, { ComponentPropsWithoutRef } from "react"
import style from "./style"

const { textfield } = style()

type ComboBoxTextFieldProps = ComponentPropsWithoutRef<"div">

const ComboBoxTextField = ({ children, ...rest }: ComboBoxTextFieldProps) => {
    const className = rest.className

    return (
        <div {...rest} className={textfield({ className })}>
            {children}
        </div>
    )
}

export default ComboBoxTextField
