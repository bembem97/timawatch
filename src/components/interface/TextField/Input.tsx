import React, { ComponentPropsWithoutRef } from "react"
import style from "./style"

const { input } = style()

type InputProps = ComponentPropsWithoutRef<"input">

const Input = ({ ...rest }: InputProps) => {
    const className = rest.className

    return <input {...rest} className={input({ className })} />
}

export default Input
