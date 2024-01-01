import React, { Fragment, ComponentPropsWithoutRef } from "react"
import { Disclosure as DisclosureUI, Transition } from "@headlessui/react"
import style from "./style"

const { panel } = style()

type DisclosurePanelProps = ComponentPropsWithoutRef<typeof DisclosureUI.Panel> & {
    open?: boolean
}

const DisclosurePanel = ({ children, open, ...rest }: DisclosurePanelProps) => {
    const className = rest.className
    return (
        <Transition
            show={open}
            as={Fragment}
            enter="transition-grid-templates duration-100 ease-linear"
            enterFrom="grid-rows-[0fr]"
            enterTo="grid-rows-[1fr]"
            leave="transition-grid-templates duration-100 ease-linear"
            leaveFrom="grid-rows-[1fr]"
            leaveTo="grid-rows-[0fr]"
        >
            <DisclosureUI.Panel {...rest} className={panel({ className })} as="div">
                {children}
            </DisclosureUI.Panel>
        </Transition>
    )
}

export default DisclosurePanel
