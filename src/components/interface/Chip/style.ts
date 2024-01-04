import { tv } from "tailwind-variants"

const chipStyle = tv({
    base: ["chip"],
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
        size: {
            xs: "chip--xs",
            sm: "chip--sm",
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
        size: "sm",
    },
})

export default chipStyle
