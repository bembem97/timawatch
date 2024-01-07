import React from "react"
import style from "./style"
import NavMenu from "~/components/view/NavMenu"
import Logo from "../Logo"

const { base, menu, content } = style()

const SideNav = () => {
    return (
        <nav className={base()}>
            <div className={content()}>
                <Logo />

                <div className={menu()}>
                    <NavMenu />
                </div>
            </div>
        </nav>
    )
}

export default SideNav
