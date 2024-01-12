import { tv } from "tailwind-variants"

const collapseTextStyle = tv({
    slots: {
        base: ["collapse-text"],
        text: ["collapse__text"],
    },
    variants: {
        expand: {
            true: {
                text: "text__expanded--true",
            },
            false: {
                text: "text__expanded--false",
            },
        },
    },
})

export default collapseTextStyle
