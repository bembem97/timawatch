import React, { ComponentPropsWithoutRef, ElementType } from "react"
import style from "./style"
import CarouselButtons from "./CarouselButtons"
import CarouselTitle from "./CarouselTitle"
import CarouselSlide from "./CarouselSlide"

const { base } = style()

type CarouselProps = ComponentPropsWithoutRef<"div"> & {
    as?: ElementType
}

const Carousel = ({ children, as, ...rest }: CarouselProps) => {
    const className = rest.className
    const Component = as ?? "div"
    return (
        <Component {...rest} className={base({ className })}>
            {children}
        </Component>
    )
}

export default Carousel
export { CarouselButtons, CarouselTitle, CarouselSlide }
