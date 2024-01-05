import React, { ComponentPropsWithoutRef, ElementType } from "react"
import style from "./style"

const { text } = style()

type ListItemTextProps = ComponentPropsWithoutRef<keyof JSX.IntrinsicElements> & {
    as?: ElementType
}

const ListItemText = ({ children, as, ...rest }: ListItemTextProps) => {
    const className = rest.className
    const Component = as ?? "span"

    return (
        <Component {...rest} className={text({ className })}>
            {children}
        </Component>
    )
}

export default ListItemText
