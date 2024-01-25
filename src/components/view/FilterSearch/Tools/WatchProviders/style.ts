import { tv } from "tailwind-variants"

const watchProvidersStyle = tv({
    slots: {
        checkbox: ["absolute", "top-1", "left-1", "", "hidden", "checked:inline-block"],
        image: ["object-cover rounded-lg bg-glass"],
        item: ["w-11 h-11 relative", "cursor-pointer"],
        container: ["flex flex-wrap gap-4", "p-1"],
    },
})

export default watchProvidersStyle
