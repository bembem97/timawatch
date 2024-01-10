import { tv } from "tailwind-variants"

const navbarStyle = tv({
    slots: {
        header: ["item-header bg-inherit sticky top-0 z-appBar"],
        nav: [
            "grid",
            "grid-cols-[max-content_1fr_max-content_1fr_max-content]",
            "[grid-template-areas:'m_._l_._s']",
            "4xl:flex",
            "gap-x-0.5",
            "min-h-12",
            "h-full",
            "pl-0",
        ],
    },
})

export default navbarStyle
