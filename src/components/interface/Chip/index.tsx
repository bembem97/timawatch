"use client"
import React, { ComponentPropsWithoutRef, ElementType, ReactElement, useState } from "react"
import { VariantProps } from "tailwind-variants"
import style from "./style"
import IconProps from "~/types/interface/icon"
import { CheckCircleIcon } from "@heroicons/react/20/solid"
import Icon from "../Icon"

type ChipProps = VariantProps<typeof style> &
    ComponentPropsWithoutRef<keyof JSX.IntrinsicElements> & {
        as?: ElementType
        iconStart?: ReactElement<IconProps>
        label: string
    }

const Chip = ({ label, as, clickable, iconStart, variant, color, size, ...rest }: ChipProps) => {
    const [selected, setSelected] = useState(false)

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
            className={style({ className, clickable, color, variant, size })}
            onClick={() => setSelected(!selected)}
        >
            {StartIcon && StartIcon}

            {label}

            {clickable && selected && <Icon icon={CheckCircleIcon} size={size} />}
        </Component>
    )
}

export default Chip
