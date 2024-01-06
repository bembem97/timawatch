import React, { ComponentPropsWithoutRef, ElementType } from "react"
import style from "./style"
import { Menu } from "@headlessui/react"

const { item } = style()

type DropdownItemProps = ComponentPropsWithoutRef<typeof Menu.Item> & {
    as?: ElementType
}

const DropdownItem = ({ children, as, ...rest }: DropdownItemProps) => {
    const className = rest.className
    const Component = as ?? "div"

    return (
        <Menu.Item {...rest} as={Component} className={item({ className })}>
            {children}
        </Menu.Item>
    )
}

export default DropdownItem
