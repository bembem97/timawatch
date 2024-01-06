import React, { ComponentPropsWithoutRef, ElementType } from "react"
import style from "./style"

type ContainerBoxProps = ComponentPropsWithoutRef<keyof JSX.IntrinsicElements> & {
    as?: ElementType
}

const ContainerBox = ({ children, as, ...rest }: ContainerBoxProps) => {
    const Component = as ?? "div"
    const className = rest.className

    return (
        <Component {...rest} className={style({ className })}>
            {children}
        </Component>
    )
}

export default ContainerBox
