import React, { ComponentPropsWithoutRef } from "react"
import style from "./style"

const { base } = style()

type FormControlProps = ComponentPropsWithoutRef<"div">

const FormControl = ({ children, ...rest }: FormControlProps) => {
    const className = rest.className
    return (
        <div {...rest} className={base({ className })}>
            {children}
        </div>
    )
}

export default FormControl
