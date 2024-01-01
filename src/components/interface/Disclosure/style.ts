import { tv } from "tailwind-variants"
import textStyle from "../Text/style"

const disclosureStyle = tv({
    slots: {
        button: ["disclosure__button", textStyle({ variant: "button" })],
        icon: ["ui-open:rotate-90 transition-transform"],
        panel: ["grid", "grid-cols-1"],
        outerContent: ["overflow-hidden", "w-full"],
    },
})

export default disclosureStyle
