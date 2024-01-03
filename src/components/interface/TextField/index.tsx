import React, { ComponentPropsWithoutRef } from "react"
import FormControl from "./FormControl"
import Input from "./Input"
import style from "./style"
import { VariantProps } from "tailwind-variants"

const { textfield } = style()

type TextFieldProps = VariantProps<typeof style> &
    ComponentPropsWithoutRef<"input"> & {
        formcontrolProps?: ComponentPropsWithoutRef<"div">
    }

const TextField = ({ formcontrolProps, fullWidth, ...rest }: TextFieldProps) => {
    const divClassName = formcontrolProps?.className

    return (
        <FormControl {...formcontrolProps} className={textfield({ className: divClassName, fullWidth })}>
            <Input {...rest} />
        </FormControl>
    )
}

export default TextField
