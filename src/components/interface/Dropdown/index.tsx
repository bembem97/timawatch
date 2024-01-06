import React, { ComponentPropsWithoutRef, ElementType } from "react"
import style from "./style"
import { Menu } from "@headlessui/react"
import DropdownButton from "./DropdownButton"
import DropdownItems from "./DropdownItems"
import DropdownItem from "./DropdownItem"

const { base } = style()

type DropdownProps = ComponentPropsWithoutRef<typeof Menu> & {
    as?: ElementType
}

const Dropdown = ({ children, as, ...rest }: DropdownProps) => {
    const className = rest.className
    const Component = as ?? "div"

    return (
        <Menu {...rest} as={Component} className={base({ className })}>
            {children}
        </Menu>
    )
}

export default Dropdown
export { DropdownButton, DropdownItems, DropdownItem }
