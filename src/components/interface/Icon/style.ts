import { tv } from "tailwind-variants"

const iconStyle = tv({
    base: "base__icon",
    variants: {
        size: {
            sm: "icon--sm",
            md: "icon--md",
        },
    },
    defaultVariants: {
        size: "md",
    },
})

export default iconStyle
