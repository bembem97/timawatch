import React, { ComponentPropsWithoutRef } from "react"
import style from "./style"
import CarouselButtons from "./CarouselButtons"
import CarouselTitle from "./CarouselTitle"
import CarouselSlide from "./CarouselSlide"

const { base } = style()

type CarouselProps = ComponentPropsWithoutRef<"div">

const Carousel = ({ children, ...rest }: CarouselProps) => {
    const className = rest.className
    return (
        <div {...rest} className={base({ className })}>
            {children}
        </div>
    )
}

export default Carousel
export { CarouselButtons, CarouselTitle, CarouselSlide }
