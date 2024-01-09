import { tv } from "tailwind-variants"

const homebannerStyle = tv({
    slots: {
        base: ["px-2", "grid", "[grid-template-areas:'x']", "[&>*]:[grid-area:x]"],
        backdrop: [
            "w-full",
            "min-h-[360px]",
            "max-h-max",
            "relative -z-10",
            "bg-[image:var(--backdrop)]",
            "bg-cover",
            "bg-center",
            "rounded-xl",
            "overflow-hidden",
            "before:absolute",
            "before:inset-0",
            "before:z-10",
            "before:shadow-glass",
            "before:bg-gradient-to-tr",
            "before:from-background-dark/80",
            "before:to-background-dark/30",
            "before:rounded-xl",
        ],
        content: ["py-2 px-3", "flex", "flex-col", "gap-y-4"],
    },
})

export default homebannerStyle
