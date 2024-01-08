import React from "react"
import ContainerBox from "~/components/interface/ContainerBox"
import style from "./style"
import MobileMenu from "~/components/view/MobileMenu"
import Logo from "../Logo"
import SearchBar from "~/components/view/SearchBar"
import SearchDialog from "~/components/view/SearchBar/SearchDialog"

const { header, nav /*link*/ } = style()

const Navbar = () => {
    return (
        <header className={header()}>
            <ContainerBox as="nav" className={nav()}>
                <MobileMenu className="[grid-area:m]" />

                <Logo className="[grid-area:l] flex 4xl:hidden" />

                <div className="[grid-area:s] flex items-center 4xl:ml-auto">
                    <SearchBar className="hidden 4xl:block" />
                    <SearchDialog className="flex 4xl:hidden" />
                </div>
            </ContainerBox>
        </header>
    )
}

export default Navbar
