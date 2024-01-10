import React, { ComponentPropsWithRef, forwardRef } from "react"
import { Combobox as ComboBoxUI } from "@headlessui/react"
import style from "./style"

const { input } = style()

type ComboBoxInputProps = ComponentPropsWithRef<typeof ComboBoxUI.Input> & ComponentPropsWithRef<"input">

const ComboBoxInput = forwardRef<HTMLInputElement, ComboBoxInputProps>(({ ...rest }, ref) => {
    const className = rest.className

    return <ComboBoxUI.Input {...rest} ref={ref} className={input({ className })} />
})

ComboBoxInput.displayName = "ComboBoxInput"

export default ComboBoxInput
