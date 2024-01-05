import { tv } from "tailwind-variants"

const listStyle = tv({
    slots: {
        base: "list",
        item: "list__item",
        button: "list__button",
        text: "list__item__text",
        icon: "list__item__icon",
    },
})

export default listStyle
