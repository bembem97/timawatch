import React, { ComponentPropsWithoutRef } from "react"
import SvgProps from "~/types/interface/icon"
import style from "./style"
import { VariantProps } from "tailwind-variants"

type IconProps = VariantProps<typeof style> &
    ComponentPropsWithoutRef<"svg"> & {
        icon: SvgProps
    }

const Icon = ({ icon, size, ...rest }: IconProps) => {
    const Component = icon
    const className = rest.className

    return <Component {...rest} className={style({ className, size })} />
}

export default Icon
