"use client"
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import React, { Fragment } from "react"
import Button from "~/components/interface/Button"
import Disclosure, {
    DisclosureButton,
    DisclosureContent,
    DisclosurePanel,
} from "~/components/interface/Disclosure"
import List, { ListItem, ListItemButton, ListItemText } from "~/components/interface/List"
import Text from "~/components/interface/Text"
import menuData from "~/data/menuData"

const NavMenu = () => {
    return (
        <>
            {menuData.map(({ id, label, Icon, status }) => (
                <Disclosure key={id} as={"div"} className="disclosure">
                    <div className="pl-4 menu__accordion with-hover:hover:menu__accordion--selected">
                        <DisclosureButton iconStart={Icon} className="w-full">
                            {label}
                        </DisclosureButton>
                    </div>
                    <DisclosurePanel>
                        <DisclosureContent>
                            <List key={id} as="div">
                                {status.map(({ id, label, pathname }) => (
                                    <ListItem as="div" key={id}>
                                        <ListItemButton as={Link} href={`/discover${pathname}`}>
                                            <ListItemText>
                                                <Text className="text-foreground-mute">{label}</Text>
                                            </ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </DisclosureContent>
                    </DisclosurePanel>
                </Disclosure>
            ))}

            <div className="pl-4 mt-2.5 pr-2 4xl:pr-0">
                <Button
                    color="accent"
                    variant="filled"
                    className="w-full"
                    iconStart={ArrowRightEndOnRectangleIcon}
                >
                    Sign In
                </Button>
            </div>
        </>
    )
}

export default NavMenu
