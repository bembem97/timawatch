import React, { ElementType, ComponentPropsWithoutRef } from "react"
import style from "./style"
import { VariantProps } from "tailwind-variants"
import IconProps from "~/types/interface/icon"
import Icon from "../Icon"

type ButtonProps = VariantProps<typeof style> &
    ComponentPropsWithoutRef<keyof JSX.IntrinsicElements> & {
        as?: ElementType
        iconStart?: IconProps
        iconEnd?: IconProps
    }

const Button = ({ children, as, variant, color, iconStart, iconEnd, size, ...rest }: ButtonProps) => {
    const Component = as ?? "button"
    const className = rest.className

    const IconStart = iconStart
    const IconEnd = iconEnd

    return (
        <Component {...rest} className={style({ className, variant, color, size })}>
            {IconStart && <Icon icon={IconStart} size={size} />}
            {children}
            {IconEnd && <Icon icon={IconEnd} size={size} />}
        </Component>
    )
}

export default Button
