import React, { ComponentPropsWithoutRef, Fragment } from "react"
import DialogOverlay from "./DialogOverlay"
import DialogPanel from "./DialogPanel"
import { Dialog as DialogUI, Transition } from "@headlessui/react"
import style from "./style"

const { base } = style()

type DialogProps = ComponentPropsWithoutRef<typeof DialogUI> & {
    show: boolean
}

const Dialog = ({ children, show, ...rest }: DialogProps) => {
    const className = rest.className
    return (
        <Transition as={Fragment} show={show}>
            <DialogUI {...rest} as="div" className={base({ className })}>
                {children}
            </DialogUI>
        </Transition>
    )
}

export default Dialog
export { DialogOverlay, DialogPanel }
