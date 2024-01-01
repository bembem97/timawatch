import React, { ComponentPropsWithoutRef } from "react"
import NextLink from "next/link"
import style from "./style"
import { VariantProps } from "tailwind-variants"

type LinkProps = VariantProps<typeof style> & ComponentPropsWithoutRef<typeof NextLink>

const Link = ({ children, variant, ...rest }: LinkProps) => {
    const className = rest.className

    return (
        <NextLink {...rest} className={style({ className, variant })}>
            {children}
        </NextLink>
    )
}

export default Link
