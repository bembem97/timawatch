import { tv } from "tailwind-variants"

const mobileMenuStyle = tv({
    slots: {
        menuButton: ["flex 4xl:hidden", "self-center"],
    },
})

export default mobileMenuStyle
