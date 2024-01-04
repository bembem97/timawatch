import { tv } from "tailwind-variants"

const cardStyle = tv({
    slots: {
        base: "card",
        media: "card__media",
        body: "card__body",
        action: "card__action",
    },

    variants: {
        layout: {
            portrait: "card--portrait",
            landscape: "card--landscape",
        },
    },
    defaultVariants: {
        layout: "portrait",
    },
})

export default cardStyle
