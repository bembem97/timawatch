import React, { ComponentPropsWithoutRef } from "react"
import Button from "../Button"
import style from "./style"

const { button } = style()

type FormButtonProps = ComponentPropsWithoutRef<typeof Button> & {
    containerProps?: ComponentPropsWithoutRef<"div">
}

const FormButton = ({ children, containerProps, ...rest }: FormButtonProps) => {
    const className = rest.className
    return (
        <div {...containerProps} className={button({ className })}>
            <Button {...rest}>{children}</Button>
        </div>
    )
}

export default FormButton
