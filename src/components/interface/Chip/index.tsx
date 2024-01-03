import React, { ComponentPropsWithoutRef, ElementType } from "react"
import { VariantProps } from "tailwind-variants"
import style from "./style"
import IconProps from "~/types/interface/icon"
import Icon from "../Icon"

type ChipProps = VariantProps<typeof style> &
    ComponentPropsWithoutRef<keyof JSX.IntrinsicElements> & {
        as?: ElementType
        iconStart?: IconProps
    }

const Chip = ({ children, as, clickable, iconStart, variant, color, ...rest }: ChipProps) => {
    const className = rest.className
    const Component = as ?? "span"

    const roleButton = clickable ? "button" : null
    const focusable = clickable ? 0 : null

    const StartIcon = iconStart

    return (
        <Component
            {...rest}
            role={roleButton}
            tabIndex={focusable}
            data-interactive={clickable}
            className={style({ className, clickable, color, variant })}
        >
            {StartIcon && <Icon size="sm" icon={StartIcon} />}
            {children}
        </Component>
    )
}

export default Chip
