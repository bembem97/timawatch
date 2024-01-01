import { tv } from "tailwind-variants"

const textStyle = tv({
    variants: {
        variant: {
            h1: "h1",
            h2: "h2",
            h3: "h3",
            h4: "h4",
            paragraph: "paragraph",
            button: "button",
            caption: "caption",
        },
    },
    defaultVariants: {
        variant: "paragraph",
    },
})

export default textStyle
