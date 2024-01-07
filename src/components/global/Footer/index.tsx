import React from "react"
import ContainerBox from "~/components/interface/ContainerBox"
import Text from "~/components/interface/Text"

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="item-footer">
            <ContainerBox className="h-full flex items-center justify-center">
                <Text variant="h3" as="p">
                    &copy; {year} Timawatch. All rights reserved.
                </Text>
            </ContainerBox>
        </footer>
    )
}

export default Footer
