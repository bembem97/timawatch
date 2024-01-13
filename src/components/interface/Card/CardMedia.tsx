import React, { ComponentPropsWithoutRef, ElementType } from "react"
import style from "./style"
import Image from "next/image"

const { media } = style()

type CardMediaProps = ComponentPropsWithoutRef<typeof Image> & {
    as?: ElementType
    mediaProps?: ComponentPropsWithoutRef<"div">
}

const CardMedia = ({ as, mediaProps, ...rest }: CardMediaProps) => {
    const className = rest.className
    const mediaClassName = mediaProps?.className
    const Component = as ?? "div"

    return (
        <Component {...mediaProps} className={media({ className: mediaClassName })}>
            <Image {...rest} />
        </Component>
    )
}

export default CardMedia
