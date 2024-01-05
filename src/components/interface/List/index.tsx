import React, { ComponentPropsWithoutRef, ElementType } from "react"
import style from "./style"
import ListItem from "./ListItem"
import ListItemButton from "./ListItemButton"
import ListItemText from "./ListItemText"
import ListItemIcon from "./ListItemIcon"

const { base } = style()

type ListProps = ComponentPropsWithoutRef<keyof JSX.IntrinsicElements> & {
    as?: ElementType
}

const List = ({ children, as, ...rest }: ListProps) => {
    const className = rest.className
    const Component = as ?? "ul"

    return (
        <Component {...rest} className={base({ className })}>
            {children}
        </Component>
    )
}

export default List
export { List, ListItem, ListItemButton, ListItemText, ListItemIcon }
