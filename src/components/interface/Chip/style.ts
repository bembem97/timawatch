import { tv } from "tailwind-variants"
import textStyle from "../Text/style"

const chipStyle = tv({
    base: ["chip", textStyle({ variant: "caption" })],
    variants: {
        clickable: {
            true: "cursor-pointer",
        },
        color: {
            default: "",
            accent: "",
        },
        variant: {
            filled: "",
            outlined: "",
        },
    },
    compoundVariants: [
        {
            variant: "filled",
            color: "default",
            className: "chip__filled--default",
        },
        {
            variant: "filled",
            color: "accent",
            className: "chip__filled--accent",
        },
        {
            variant: "outlined",
            color: "default",
            className: "chip__outlined--default",
        },
        {
            variant: "outlined",
            color: "accent",
            className: "chip__outlined--accent",
        },
    ],
    defaultVariants: {
        color: "default",
        variant: "filled",
    },
})

export default chipStyle
