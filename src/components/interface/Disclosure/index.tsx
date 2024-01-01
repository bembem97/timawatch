"use client"
import React, { ComponentPropsWithoutRef } from "react"
import { Disclosure as DisclosureUI } from "@headlessui/react"
import DisclosureButton from "./DisclosureButton"
import DisclosurePanel from "./DisclosurePanel"
import DisclosureContent from "./DisclosureContent"

interface DisclosureProps extends ComponentPropsWithoutRef<typeof DisclosureUI> {}

const Disclosure = ({ children, ...rest }: DisclosureProps) => {
    return (
        <DisclosureUI {...rest} as="div">
            {children}
        </DisclosureUI>
    )
}

export default Disclosure
export { DisclosureButton, DisclosurePanel, DisclosureContent }
