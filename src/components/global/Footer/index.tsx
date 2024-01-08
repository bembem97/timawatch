import React from "react"
import ContainerBox from "~/components/interface/ContainerBox"
import Icon from "~/components/interface/Icon"
import Link from "~/components/interface/Link"
import Text from "~/components/interface/Text"
import menuData from "~/data/menuData"

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="item-footer">
            <ContainerBox className="h-full">
                <div className="flex flex-col gap-y-8">
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-y-2 justify-items-center">
                        {menuData.map(({ id, label, status, Icon: Vector }) => (
                            <div key={id} className="flex flex-col gap-y-3">
                                <div className="flex items-center gap-x-2">
                                    <Icon icon={Vector} />
                                    <Text variant="h4">{label}</Text>
                                </div>
                                {status.map(({ id, label, pathname }) => (
                                    <Link
                                        key={id}
                                        href={pathname}
                                        className="text-foreground-mute hover:underline"
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center">
                        <Text variant="h3" as="p">
                            &copy; {year} Timawatch. All rights reserved.
                        </Text>
                    </div>
                </div>
            </ContainerBox>
        </footer>
    )
}

export default Footer
