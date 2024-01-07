import React, { ComponentPropsWithoutRef } from "react"
import style from "./style"
import Link from "~/components/interface/Link"

const { base, logo } = style()

interface LogoProps extends ComponentPropsWithoutRef<"div"> {}

const Logo = ({ ...rest }: LogoProps) => {
    const className = rest.className

    return (
        <div className={base({ className })}>
            <Link href="/" variant="button" className={logo()}>
                Timawatch
            </Link>
        </div>
    )
}

export default Logo
