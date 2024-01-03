import { Bars3CenterLeftIcon, HeartIcon, UserIcon } from "@heroicons/react/20/solid"
import type { Metadata } from "next"
import { ReactNode } from "react"
import Button from "~/components/interface/Button"
import Chip from "~/components/interface/Chip"
import Container from "~/components/interface/Container"
import Icon from "~/components/interface/Icon"
import Link from "~/components/interface/Link"
import Text from "~/components/interface/Text"
import Accordion from "~/components/test/Accordion"
import ComboBoxAutoComplete from "~/components/test/ComboBoxAutoComplete"
import ListBoxSelector from "~/components/test/ListBoxSelector"
import Modal from "~/components/test/Modal"
import ModalDrawer from "~/components/test/ModalDrawer"

export const metadata: Metadata = {
    title: "Components UI",
}

export default function ComponentsUI() {
    return (
        <Container as="main" className="p-4 grid grid-cols-1 gap-y-4">
            <Wrapper title="Typography">
                <Text variant="h1">Heading 1</Text>
                <Text variant="h2">Heading 2</Text>
                <Text variant="h3">Heading 3</Text>
                <Text variant="h4">Heading 4</Text>
                <Text variant="paragraph">
                    <span className="text-accent-light">Paragraph:</span> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Alias ipsa aspernatur iste rerum corporis officiis dicta
                    consequatur, doloribus, tempora, eos in. Dolores placeat sapiente aperiam praesentium nisi
                    voluptate inventore odit!
                </Text>
                <Text variant="button">Button</Text>
                <Text variant="caption" color="mute">
                    <span className="text-accent-light">Caption:</span> Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Dignissimos hic repellendus id quidem nam nisi iure
                    molestiae, delectus illo fugit eveniet ipsam ullam, deleniti vel autem doloremque eaque
                    quos a.
                </Text>
            </Wrapper>

            <Wrapper title="Icons">
                <Icon size="md" icon={Bars3CenterLeftIcon} />
                <Icon size="sm" icon={Bars3CenterLeftIcon} />
            </Wrapper>

            <Wrapper title="Buttons">
                <div className="grid grid-cols-2 gap-4 justify-items-start">
                    <div className="flex flex-col gap-y-4">
                        <Button>Button</Button>
                        <Button color="accent">Button</Button>
                        <Button variant="filled">Button</Button>
                        <Button variant="filled" color="accent">
                            Button
                        </Button>
                    </div>

                    <div className="flex flex-col gap-y-4">
                        <Button iconStart={HeartIcon} iconEnd={UserIcon}>
                            Button
                        </Button>
                        <Button iconStart={HeartIcon} iconEnd={UserIcon} color="accent">
                            Button
                        </Button>
                        <Button iconStart={HeartIcon} iconEnd={UserIcon} variant="filled">
                            Button
                        </Button>
                        <Button iconStart={HeartIcon} iconEnd={UserIcon} variant="filled" color="accent">
                            Button
                        </Button>
                    </div>

                    <div className="flex flex-col gap-y-4">
                        <Button size="sm" iconStart={HeartIcon}>
                            Button
                        </Button>
                        <Button size="sm" iconStart={HeartIcon} color="accent">
                            Button
                        </Button>
                        <Button size="sm" iconStart={HeartIcon} variant="filled">
                            Button
                        </Button>
                        <Button size="sm" iconStart={HeartIcon} variant="filled" color="accent">
                            Button
                        </Button>
                    </div>

                    <div className="flex flex-col gap-y-4">
                        <Button size="sm" iconStart={HeartIcon}></Button>
                        <Button size="sm" iconStart={HeartIcon} color="accent"></Button>
                        <Button size="sm" iconStart={HeartIcon} variant="filled"></Button>
                        <Button size="sm" iconStart={HeartIcon} variant="filled" color="accent"></Button>
                    </div>

                    <div className="flex flex-col gap-y-4">
                        <Button disabled iconStart={HeartIcon} iconEnd={UserIcon}>
                            Button
                        </Button>
                        <Button disabled iconEnd={UserIcon} color="accent"></Button>
                        <Button disabled iconStart={HeartIcon} iconEnd={UserIcon} variant="filled">
                            Button
                        </Button>
                        <Button disabled iconStart={HeartIcon} variant="filled" color="accent"></Button>
                    </div>
                </div>
            </Wrapper>

            <Wrapper title="Link">
                <Link variant="h4" href="/" className="italic">
                    I am a link
                </Link>
            </Wrapper>

            <Wrapper title="Dialog">
                <Modal />
            </Wrapper>

            <Wrapper title="Drawer">
                <ModalDrawer />
            </Wrapper>

            <Wrapper title="Accordion">
                <Accordion />
            </Wrapper>

            <Wrapper title="Container Box">
                <Container>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ut sapiente eveniet
                        error non quibusdam quae est placeat? Reprehenderit, blanditiis sed impedit inventore
                        laudantium quod velit quae numquam repellendus ullam.
                    </Text>
                </Container>
            </Wrapper>

            <Wrapper title="Listbox">
                <ListBoxSelector />
            </Wrapper>

            <Wrapper title="ComboBox">
                <ComboBoxAutoComplete />
            </Wrapper>

            <Wrapper title="Chip">
                <div className="flex gap-x-4">
                    <div className="flex flex-col gap-y-2">
                        <Text variant="caption">Non-interactive</Text>

                        <Chip variant="filled" color="default">
                            Chip Label
                        </Chip>
                        <Chip variant="outlined" color="default">
                            Chip Label
                        </Chip>
                        <Chip variant="filled" color="accent">
                            Chip Label
                        </Chip>
                        <Chip variant="outlined" color="accent">
                            Chip Label
                        </Chip>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Text variant="caption">Clickable</Text>

                        <Chip variant="filled" color="default" clickable>
                            Chip Label
                        </Chip>
                        <Chip variant="outlined" color="default" clickable>
                            Chip Label
                        </Chip>
                        <Chip variant="filled" color="accent" clickable>
                            Chip Label
                        </Chip>
                        <Chip variant="outlined" color="accent" clickable>
                            Chip Label
                        </Chip>
                    </div>
                </div>
            </Wrapper>
        </Container>
    )
}

function Wrapper({ children, title }: { children: ReactNode; title: string }) {
    return (
        <div className="grid grid-cols-1 gap-y-4">
            <Text variant="h2">{title}</Text>
            <div className="grid grid-cols-1 justify-items-start p-4 gap-4 rounded-xl bg-background-light">
                {children}
            </div>
        </div>
    )
}