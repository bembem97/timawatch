import { tv } from "tailwind-variants"

const searchbarStyle = tv({
    slots: {
        base: ["relative", "grid-rows-[max-content,1fr]", "grid-cols-1"],
        textfieldResult: ["absolute", "top-[calc(100%+2px)]", "max-h-96", "h-auto", "w-full"],
        dialogResult: [],
        resultList: ["hover:bg-background-dark", "transition-colors", "duration-100", "p-1", "rounded-lg"],
    },
    compoundSlots: [
        {
            slots: ["textfieldResult", "dialogResult"],
            className: ["bg-background-light rounded-lg", "overflow-auto"],
        },
    ],
})

export default searchbarStyle
