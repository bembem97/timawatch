import React, { ComponentPropsWithoutRef } from "react"
import style from "./style"
import { VariantProps } from "tailwind-variants"

type SpinnerProps = VariantProps<typeof style> & ComponentPropsWithoutRef<"span">

const Spinner = ({ size, ...rest }: SpinnerProps) => {
    const className = rest.className
    return <span {...rest} className={style({ size, className })} />
}

export default Spinner
