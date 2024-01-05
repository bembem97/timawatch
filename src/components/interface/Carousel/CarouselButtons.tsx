import React, { ComponentPropsWithRef, ComponentPropsWithoutRef, MutableRefObject } from "react"
import style from "./style"
import Button from "../Button"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"

const { buttonPrev, buttonNext } = style()

type CarouselButtonsProps = ComponentPropsWithoutRef<typeof Button> & {
    prevProps?: ComponentPropsWithRef<typeof Button>
    nextProps?: ComponentPropsWithRef<typeof Button>
}

const CarouselButtons = ({ prevProps, nextProps }: CarouselButtonsProps) => {
    return (
        <>
            <Button
                {...prevProps}
                variant="filled"
                color="accent"
                iconStart={ChevronLeftIcon}
                className={buttonPrev()}
            />
            <Button
                {...nextProps}
                variant="filled"
                color="accent"
                iconStart={ChevronRightIcon}
                className={buttonNext()}
            />
        </>
    )
}

export default CarouselButtons
