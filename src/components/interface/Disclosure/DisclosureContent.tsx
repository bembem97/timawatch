import React, { ComponentPropsWithoutRef } from "react"
import style from "./style"

const { outerContent } = style()

interface DisclosureContentProps extends ComponentPropsWithoutRef<"div"> {}

const DisclosureContent = ({ children, ...rest }: DisclosureContentProps) => {
    const className = rest.className
    return (
        <div {...rest} className={outerContent({ className })}>
            {children}
        </div>
    )
}

export default DisclosureContent
