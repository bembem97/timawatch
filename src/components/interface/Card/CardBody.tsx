import React, { ComponentPropsWithoutRef, ElementType } from "react"
import style from "./style"

const { body } = style()

type CardBodyProps = ComponentPropsWithoutRef<keyof JSX.IntrinsicElements> & {
    as?: ElementType
}

const CardBody = ({ children, as, ...rest }: CardBodyProps) => {
    const className = rest.className
    const Component = as ?? "div"

    return (
        <Component {...rest} className={body({ className })}>
            {children}
        </Component>
    )
}

export default CardBody
