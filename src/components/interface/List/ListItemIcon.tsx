import React, { ComponentPropsWithoutRef, ElementType } from "react"
import style from "./style"

const { icon } = style()

type ListItemIconProps = ComponentPropsWithoutRef<keyof JSX.IntrinsicElements> & {
    as?: ElementType
}

const ListItemIcon = ({ children, as, ...rest }: ListItemIconProps) => {
    const className = rest.className
    const Component = as ?? "div"

    return (
        <Component {...rest} className={icon({ className })}>
            {children}
        </Component>
    )
}

export default ListItemIcon
