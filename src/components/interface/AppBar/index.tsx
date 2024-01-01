import React, { ComponentPropsWithoutRef, ElementType } from "react"
import style from "./style"

const { base, toolbar } = style()

type AppBarProps = ComponentPropsWithoutRef<keyof JSX.IntrinsicElements> & {
    as?: ElementType
}

const AppBar = ({ children, as, ...rest }: AppBarProps) => {
    const Component = as ?? "div"
    const className = rest.className

    return (
        <Component {...rest} className={base({ className })}>
            <nav className={toolbar()}>{children}</nav>
        </Component>
    )
}

export default AppBar
