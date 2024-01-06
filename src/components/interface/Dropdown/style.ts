import { tv } from "tailwind-variants"

const dropdownStyle = tv({
    slots: {
        base: "dropdown",
        button: ["dropdown__button","base__button", "button__text--default"],
        items: ["dropdown__items", "list", "absolute"],
        item: "list__button",
    },
})

export default dropdownStyle
