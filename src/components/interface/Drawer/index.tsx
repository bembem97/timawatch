import React, { ComponentPropsWithoutRef, Fragment } from "react"
import DrawerOverlay from "./DrawerOverlay"
import DrawerPanel from "./DrawerPanel"
import { Dialog as DrawerUI, Transition } from "@headlessui/react"
import style from "./style"

const { base } = style()

type DrawerProps = ComponentPropsWithoutRef<typeof DrawerUI> & {
    show: boolean
}

const Drawer = ({ children, show, ...rest }: DrawerProps) => {
    const className = rest.className
    return (
        <Transition as={Fragment} show={show}>
            <DrawerUI {...rest} as="div" className={base({ className })}>
                {children}
            </DrawerUI>
        </Transition>
    )
}

export default Drawer
export { DrawerOverlay, DrawerPanel }
