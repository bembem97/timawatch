import React, { ComponentPropsWithRef, forwardRef } from "react"
import style from "./style"

const { input } = style()

type InputProps = ComponentPropsWithRef<"input">

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...rest }, ref) => {
    const className = rest.className

    return <input {...rest} ref={ref} className={input({ className })} />
})

Input.displayName = "Input"

export default Input
