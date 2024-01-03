import React, { ComponentPropsWithoutRef, Fragment } from "react"
import { Transition } from "@headlessui/react"
import style from "./style"

const { overlay } = style()

type DrawerOverlayProps = ComponentPropsWithoutRef<"div">

const DrawerOverlay = ({ children, ...rest }: DrawerOverlayProps) => {
    const className = rest.className

    return (
        <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-75 ease-in-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150 ease-in-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div {...rest} className={overlay({ className })}>
                {children}
            </div>
        </Transition.Child>
    )
}

export default DrawerOverlay
