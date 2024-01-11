import React, { ComponentPropsWithoutRef } from "react"
import { Combobox as ComboBoxUI } from "@headlessui/react"
import style from "./style"
import { ChevronUpDownIcon } from "@heroicons/react/20/solid"
import Icon from "../Icon"
import Button from "../Button"

const { button, icon } = style()

type ComboBoxButtonProps = ComponentPropsWithoutRef<typeof ComboBoxUI.Button>

const ComboBoxButton = ({ children, ...rest }: ComboBoxButtonProps) => {
    const className = rest.className

    return (
        <ComboBoxUI.Button className={button({ className })}>
            <span className={icon()}>
                <Icon aria-hidden="true" icon={ChevronUpDownIcon} />
            </span>
        </ComboBoxUI.Button>
    )
}

export default ComboBoxButton
