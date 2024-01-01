import React, { ComponentPropsWithoutRef, ReactNode } from "react"
import { Disclosure as DisclosureUI } from "@headlessui/react"
import Icon from "../Icon"
import { ChevronRightIcon } from "@heroicons/react/20/solid"
import style from "./style"
import IconProps from "~/types/interface/icon"

const { button, icon } = style()

interface DisclosureButtonProps extends ComponentPropsWithoutRef<typeof DisclosureUI.Button> {
    iconStart?: IconProps
}

const DisclosureButton = ({ children, iconStart, ...rest }: DisclosureButtonProps) => {
    const className = rest.className
    const IconStart = iconStart

    return (
        <DisclosureUI.Button {...rest} className={button({ className })}>
            <>
                {IconStart && <Icon icon={IconStart} className="i1" />}
                {children}
                <Icon icon={ChevronRightIcon} className={icon({ className: "i2" })} />
            </>
        </DisclosureUI.Button>
    )
}

export default DisclosureButton
