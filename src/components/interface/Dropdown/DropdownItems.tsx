import React, { ComponentPropsWithoutRef, ElementType, Fragment } from "react"
import style from "./style"
import { Menu, Transition } from "@headlessui/react"

const { items } = style()

type DropdownItemsProps = ComponentPropsWithoutRef<typeof Menu.Items> & {
    as?: ElementType
}

const DropdownItems = ({ children, as, ...rest }: DropdownItemsProps) => {
    const className = rest.className
    const Component = as ?? "div"
    return (
        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items {...rest} as={Component} className={items({ className })}>
                {children}
            </Menu.Items>
        </Transition>
    )
}

export default DropdownItems
