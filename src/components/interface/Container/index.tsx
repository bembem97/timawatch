import React, { ComponentPropsWithoutRef, ElementType } from "react"
import style from "./style"

type ContainerProps = ComponentPropsWithoutRef<keyof JSX.IntrinsicElements> & {
    as?: ElementType
}

const Container = ({ children, as, ...rest }: ContainerProps) => {
    const Component = as ?? "div"
    const className = rest.className

    return (
        <Component {...rest} className={style({ className })}>
            {children}
        </Component>
    )
}

export default Container
