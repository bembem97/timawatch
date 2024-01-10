import { tv } from "tailwind-variants"
import textStyle from "../Text/style"

const comboboxStyle = tv({
    slots: {
        base: "combobox",
        button: ["combobox__button", textStyle({ variant: "h4" })],
        icon: "combobox__button__up-down__icon",
        options: "combobox__options",
        option: ["combobox__option", textStyle({ variant: "paragraph" })],
        input: ["combobox__input"],
        textfield: ["combobox__textfield"],
    },
    variants: {
        inComponent: {
            dropdown: { options: "combobox__options--dropdown" },
            modal: { options: "combobox__options--modal" },
        },
    },
})

export default comboboxStyle
