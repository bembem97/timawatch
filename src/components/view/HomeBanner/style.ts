import { tv } from "tailwind-variants"

const homebannerStyle = tv({
    slots: {
        base: [
            "w-full aspect-video",
            "relative",
            "bg-background-dark",
            "bg-[image:var(--backdrop)]",
            "bg-cover",
            "before:absolute",
            "before:inset-0",
            "before:z-20",
            "before:rounded-xl",
            "before:shadow-glass",
            "before:bg-glass",
        ],
    },
})

export default homebannerStyle
