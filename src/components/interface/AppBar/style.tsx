import { tv } from "tailwind-variants"
import containerStyle from "../ContainerBox/style"

const appBarStyle = tv({
    slots: {
        base: "",
        toolbar: [containerStyle(), "flex", "items-center", "gap-x-4 px-4", "min-h-14 h-fit"],
    },
})

export default appBarStyle
