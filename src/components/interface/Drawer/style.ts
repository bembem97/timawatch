import { tv } from "tailwind-variants"

const drawerStyle = tv({
    slots: {
        base: ["drawer"],
        overlay: ["drawer__overlay"],
        panel: ["drawer__panel"],
        closeButton: ["justify-self-end"],
    },
})

export default drawerStyle
