import React, { ComponentPropsWithRef, forwardRef } from "react"
import style from "./style"

const { frame } = style()

type CarouselSlideProps = ComponentPropsWithRef<"div">

const CarouselSlide = forwardRef<HTMLDivElement, CarouselSlideProps>(({ children, ...rest }, ref) => {
    const className = rest.className

    return (
        <div {...rest} ref={ref} className={frame({ className })}>
            {children}
        </div>
    )
})
CarouselSlide.displayName = "CarouselSlide"

export default CarouselSlide
