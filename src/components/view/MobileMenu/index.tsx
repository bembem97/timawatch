"use client"
import { Bars3BottomLeftIcon } from "@heroicons/react/20/solid"
import React, { ComponentPropsWithoutRef, useState } from "react"
import Button from "~/components/interface/Button"
import style from "./style"
import NavMenu from "../NavMenu"
import Drawer, { DrawerOverlay, DrawerPanel } from "~/components/interface/Drawer"

const { menuButton } = style()

type MobileMenuProps = ComponentPropsWithoutRef<typeof Button>

const MobileMenu = ({ ...rest }: MobileMenuProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const closeHandler = () => setIsOpen(false)
    const openHandler = () => setIsOpen(true)

    const className = rest.className
    return (
        <>
            <Button
                iconStart={Bars3BottomLeftIcon}
                className={menuButton({ className })}
                onClick={openHandler}
            />

            <Drawer show={isOpen} onClose={closeHandler} className="">
                <DrawerOverlay />
                <DrawerPanel onClose={closeHandler}>
                    <div className="pb-2">
                        <NavMenu />
                    </div>
                </DrawerPanel>
            </Drawer>
        </>
    )
}

export default MobileMenu
