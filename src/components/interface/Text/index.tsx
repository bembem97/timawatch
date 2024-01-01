import React, { ElementType, ComponentPropsWithoutRef } from "react"
import style from "./style"
import { VariantProps } from "tailwind-variants"

type TextProps = VariantProps<typeof style> &
    ComponentPropsWithoutRef<keyof JSX.IntrinsicElements> & {
        as?: ElementType
    }

const Text = ({ children, as, variant, ...rest }: TextProps) => {
    const Component = as ?? "span"
    const className = rest.className

    return (
        <Component {...rest} className={style({ className, variant })}>
            {children}
        </Component>
    )
}

export default Text
