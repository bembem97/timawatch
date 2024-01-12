import React, { ComponentPropsWithoutRef } from "react"
import Text from "../Text"
import style from "./style"

const { title } = style()

type CarouselTitleProps = ComponentPropsWithoutRef<typeof Text> & {
    heading: string
}

const CarouselTitle = ({ heading }: CarouselTitleProps) => {
    return (
        <Text variant="h2" as="h2" className={title()}>
            {heading}
        </Text>
    )
}

export default CarouselTitle
