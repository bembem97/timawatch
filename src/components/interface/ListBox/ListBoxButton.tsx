import React, { ComponentPropsWithoutRef } from "react"
import { Listbox as ListBoxUI } from "@headlessui/react"
import style from "./style"
import { ChevronUpDownIcon } from "@heroicons/react/20/solid"
import Icon from "../Icon"

const { button, icon } = style()

type ListBoxButtonProps = ComponentPropsWithoutRef<typeof ListBoxUI.Button>

const ListBoxButton = ({ children, ...rest }: ListBoxButtonProps) => {
    const className = rest.className

    return (
        <ListBoxUI.Button {...rest} className={button({ className })}>
            <>
                {children}

                <span className={icon()}>
                    <Icon aria-hidden="true" icon={ChevronUpDownIcon} />
                </span>
            </>
        </ListBoxUI.Button>
    )
}

export default ListBoxButton
