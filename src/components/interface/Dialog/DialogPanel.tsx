import React, { ComponentPropsWithoutRef, Fragment } from "react"
import { Dialog as DialogUI, Transition } from "@headlessui/react"
import style from "./style"
import { XMarkIcon } from "@heroicons/react/20/solid"
import Button from "../Button"

const { panel, closeButton, outerPanel } = style()

type DialogPanelProps = ComponentPropsWithoutRef<"div"> & {
    onClose: () => void
    outerPanelProps?: ComponentPropsWithoutRef<"div">
}

const DialogPanel = ({ children, onClose, outerPanelProps, ...rest }: DialogPanelProps) => {
    const className = rest.className
    const opClassName = outerPanelProps?.className

    return (
        <Transition.Child
            as="div"
            enter="transition-opacity duration-500 ease-in-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500 ease-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className={outerPanel({ className: opClassName })}
        >
            <Transition.Child
                as={Fragment}
                enter="transition-transform duration-150 ease-in"
                enterFrom="translate-y-full"
                enterTo="translate-y-0"
                leave="transition-transform duration-200 ease-out"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full"
            >
                <DialogUI.Panel {...rest} className={panel({ className })}>
                    <>
                        <Button iconStart={XMarkIcon} onClick={onClose} className={closeButton()} />
                        {children}
                    </>
                </DialogUI.Panel>
            </Transition.Child>
        </Transition.Child>
    )
}

export default DialogPanel
