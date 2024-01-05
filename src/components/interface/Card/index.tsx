import React, { ComponentPropsWithoutRef, ElementType } from "react"
import style from "./style"
import { VariantProps } from "tailwind-variants"
import CardAction from "./CardAction"
import CardBody from "./CardBody"
import CardMedia from "./CardMedia"

const { base } = style()

type CardProps = VariantProps<typeof style> &
    ComponentPropsWithoutRef<keyof JSX.IntrinsicElements> & {
        as?: ElementType
    }

const Card = ({ children, as, layout, ...rest }: CardProps) => {
    const className = rest.className
    const Component = as ?? "div"

    return (
        <Component {...rest} className={base({ className, layout })}>
            {children}
        </Component>
    )
}

export default Card
export { CardAction, CardBody, CardMedia }
