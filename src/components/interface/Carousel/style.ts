import { tv } from "tailwind-variants"

const carouselStyle = tv({
    slots: {
        base: "carousel",
        title: "carousel__title",
        buttonPrev: "carousel__button--prev",
        buttonNext: "carousel__button--next",
        frame: ["carousel__frame", "scrollbar__hidden"],
    },
})

export default carouselStyle
