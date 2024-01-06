import React, { ComponentPropsWithoutRef } from "react"
import style from "./style"
import { Menu } from "@headlessui/react"

const { button } = style()

type DropdownButtonProps = ComponentPropsWithoutRef<typeof Menu.Button>

const DropdownButton = ({ children, ...rest }: DropdownButtonProps) => {
    const className = rest.className

    return (
        <Menu.Button {...rest} className={button({ className })}>
            {children}
        </Menu.Button>
    )
}

export default DropdownButton
