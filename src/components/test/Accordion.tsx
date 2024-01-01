"use client"
import { HomeIcon } from "@heroicons/react/20/solid"
import React from "react"
import Disclosure, {
    DisclosureButton,
    DisclosureContent,
    DisclosurePanel,
} from "~/components/interface/Disclosure"

const Accordion = () => {
    return (
        <>
            <Disclosure>
                <DisclosureButton>Accordion Button</DisclosureButton>
                <DisclosurePanel>
                    <DisclosureContent>
                        <div>Item</div>
                        <div>Item</div>
                        <div>Item</div>
                        <div>Item</div>
                    </DisclosureContent>
                </DisclosurePanel>
            </Disclosure>

            <Disclosure>
                <DisclosureButton iconStart={HomeIcon}>Accordion Button With Icon</DisclosureButton>
                <DisclosurePanel>
                    <DisclosureContent>
                        <div>Item</div>
                        <div>Item</div>
                        <div>Item</div>
                        <div>Item</div>
                    </DisclosureContent>
                </DisclosurePanel>
            </Disclosure>
        </>
    )
}

export default Accordion
