import { tv } from "tailwind-variants"
import textStyle from "../Text/style"

const buttonStyle = tv({
    base: ["base__button", textStyle({ variant: "button" })],
    variants: {
        variant: {
            text: "",
            filled: "",
        },
        color: {
            default: "",
            accent: "",
        },
        size: {
            sm: "h-6",
            md: "h-8",
        },
    },
    compoundVariants: [
        {
            variant: "text",
            color: "default",
            className: ["button__text--default"],
        },
        {
            variant: "text",
            color: "accent",
            className: ["button__text--accent"],
        },
        {
            variant: "filled",
            color: "default",
            className: ["button__filled--default"],
        },
        {
            variant: "filled",
            color: "accent",
            className: ["button__filled--accent"],
        },
    ],
    defaultVariants: {
        variant: "text",
        color: "default",
    },
})

export default buttonStyle
