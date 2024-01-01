import React from "react"
import AppBar from "~/components/interface/AppBar"
import Link from "~/components/interface/Link"

const Navbar = () => {
    return (
        <AppBar as="header">
            <Link variant="h4" href="/">
                Home
            </Link>
            <Link variant="h4" href="/components-ui">
                Components
            </Link>
        </AppBar>
    )
}

export default Navbar
