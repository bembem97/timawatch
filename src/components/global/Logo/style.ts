import { tv } from "tailwind-variants"

const logoStyle = tv({
    slots: {
        base: ["grid", "place-items-center"],
        logo: [
            "text-xl",
            "font-extrabold",
            "tracking-widest",
            "bg-clip-text",
            "text-transparent",
            "bg-gradient-to-r",
            "from-accent-light",
            "to-accent-dark",
        ],
    },
})

export default logoStyle
