import React, { ComponentPropsWithRef, forwardRef } from "react"
import style from "./style"
import Card, { CardAction, CardBody, CardMedia } from "../Card"
import Text from "../Text"

const { frame } = style()

type CarouselSlideProps = ComponentPropsWithRef<"div">

const CarouselSlide = forwardRef<HTMLDivElement, CarouselSlideProps>(({ children, ...rest }, ref) => {
    const className = rest.className

    return (
        <div {...rest} ref={ref} className={frame({ className })}>
            {Array.from({ length: 25 }, (_, index) => (
                <div key={index} className="basis-40 shrink-0 grow-0">
                    <Card>
                        <CardAction href="/">
                            <CardMedia src="/image/arcane_poster.jpg" width="600" height="900" alt="Poster" />
                        </CardAction>

                        <CardBody>
                            <Text variant="h4">Card Title</Text>
                            <Text className="text-foreground-mute">Subtext</Text>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </div>
    )
})
CarouselSlide.displayName = "CarouselSlide"

export default CarouselSlide
