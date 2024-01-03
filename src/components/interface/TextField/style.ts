import { tv } from "tailwind-variants"

const textfieldStyle = tv({
    slots: {
        base: ["form-control"],
        input: ["form-control__input"],
        button: ["form-control__button"],
        textfield: "",
    },

    variants: {
        fullWidth: {
            true: { textfield: "w-full" },
        },
    },
})

export default textfieldStyle
