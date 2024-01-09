import { tv } from "tailwind-variants"

const spinnerStyle = tv({
    base: [
        "animate-spin",
        "rounded-full",
        "border-solid",
        "border-accent-foreground/30",
        "border-t-accent-foreground",
        "border-r-accent-foreground",
        "border-4",
        "inline-block",
    ],
    variants: {
        size: {
            xs: ["w-4", "h-4"],
            sm: ["w-5", "h-5"],
            md: ["w-6", "h-6"],
            lg: ["w-7", "h-7"],
            xl: ["w-8", "h-8"],
        },
    },
    defaultVariants: {
        size: "md",
    },
})

export default spinnerStyle
