import { tv } from "tailwind-variants"
import textStyle from "../Text/style"

const listboxStyle = tv({
    slots: {
        base: "listbox",
        button: ["listbox__button", textStyle({ variant: "h4" })],
        icon: "listbox__button__up-down__icon",
        listboxOptions: "listbox__options scrollbar__hidden",
        listboxOption: ["listbox__option", textStyle({ variant: "paragraph" })],
    },
})

export default listboxStyle
