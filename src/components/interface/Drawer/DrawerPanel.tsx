import React, { ComponentPropsWithoutRef, Fragment } from "react"
import { Dialog as DrawerUI, Transition } from "@headlessui/react"
import style from "./style"
import { XMarkIcon } from "@heroicons/react/20/solid"
import Button from "../Button"

const { panel, closeButton } = style()

type DrawerPanelProps = ComponentPropsWithoutRef<"div"> & {
    onClose: () => void
}

const DrawerPanel = ({ children, onClose, ...rest }: DrawerPanelProps) => {
    const className = rest.className

    return (
        <Transition.Child
            as={Fragment}
            enter="transition-transform duration-300 ease-in"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform duration-300 ease-out"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
        >
            <DrawerUI.Panel {...rest} className={panel({ className })}>
                <>
                    <Button iconStart={XMarkIcon} onClick={onClose} className={closeButton()} />
                    {children}
                </>
            </DrawerUI.Panel>
        </Transition.Child>
    )
}

export default DrawerPanel
