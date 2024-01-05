import React, { ComponentPropsWithoutRef, ElementType } from "react"
import style from "./style"

const { button } = style()

type ListItemButtonProps = ComponentPropsWithoutRef<keyof JSX.IntrinsicElements> & {
    as?: ElementType
}

const ListItemButton = ({ children, as, ...rest }: ListItemButtonProps) => {
    const className = rest.className
    const Component = as ?? "div"

    return (
        <Component {...rest} className={button({ className })}>
            {children}
        </Component>
    )
}

export default ListItemButton
