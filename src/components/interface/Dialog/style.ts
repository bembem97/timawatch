import { tv } from "tailwind-variants"

const dialogStyle = tv({
    slots: {
        base: ["dialog"],
        overlay: ["dialog__overlay"],
        panel: ["dialog__panel"],
        outerPanel: ["dialog__panel__outer"],
        closeButton: ["justify-self-end"],
    },
})

export default dialogStyle
