import { tv } from "tailwind-variants"

const sideNavStyle = tv({
    slots: {
        base: ["item-nav", "hidden", "4xl:grid", "grid-cols-1", "grid-rows-1"],
        content: [
            "sticky",
            "top-0",
            "scrollbar__hidden",
            "overflow-y-auto",
            "overflow-x-hidden",
            "max-h-screen",
            "pb-2",
            "grid",
            "grid-rows-[minmax(3rem,auto)_1fr]",
            "gap-y-2",
        ],
        menu: ["flex", "flex-col", "gap-y-1.5"],
    },
})

export default sideNavStyle
