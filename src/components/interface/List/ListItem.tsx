import React, { ComponentPropsWithoutRef, ElementType } from "react"
import style from "./style"

const { item } = style()

type ListItemProps = ComponentPropsWithoutRef<keyof JSX.IntrinsicElements> & {
    as?: ElementType
}

const ListItem = ({ children, as, ...rest }: ListItemProps) => {
    const className = rest.className
    const Component = as ?? "li"

    return (
        <Component {...rest} className={item({ className })}>
            {children}
        </Component>
    )
}

export default ListItem
