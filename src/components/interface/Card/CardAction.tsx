import React, { ComponentPropsWithoutRef, ElementType } from "react"
import style from "./style"
import { VariantProps } from "tailwind-variants"
import Link from "../Link"

const { action } = style()

type CardActionProps = VariantProps<typeof style> &
    ComponentPropsWithoutRef<typeof Link> & {
        as?: ElementType
    }

const CardAction = ({ children, as, ...rest }: CardActionProps) => {
    const className = rest.className

    return (
        <Link {...rest} className={action({ className })}>
            {children}
        </Link>
    )
}

export default CardAction
