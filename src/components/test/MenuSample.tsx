"use client"
import React from "react"
import Icon from "../interface/Icon"
import { FilmIcon, UserGroupIcon } from "@heroicons/react/20/solid"
import Text from "../interface/Text"
import Dropdown, { DropdownButton, DropdownItem, DropdownItems } from "../interface/Dropdown"
import { ListItemIcon, ListItemText } from "../interface/List"

const MenuSample = () => {
    return (
        <Dropdown>
            <DropdownButton>
                <Icon icon={FilmIcon} />
                <Text variant="button">Movies</Text>
            </DropdownButton>

            <DropdownItems>
                <DropdownItem>
                    <ListItemIcon>
                        <Icon icon={UserGroupIcon} />
                    </ListItemIcon>
                    <ListItemText>
                        <Text>Item 1</Text>
                    </ListItemText>
                </DropdownItem>
                <DropdownItem>Item 2</DropdownItem>
                <DropdownItem>Item 3</DropdownItem>
                <DropdownItem>Item 4</DropdownItem>
            </DropdownItems>
        </Dropdown>
    )
}

export default MenuSample
