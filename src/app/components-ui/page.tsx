import {
    Bars3CenterLeftIcon,
    HeartIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    StarIcon,
    UserIcon,
} from "@heroicons/react/20/solid"
import type { Metadata } from "next"
import { ReactNode } from "react"
import Button from "~/components/interface/Button"
import Card from "~/components/interface/Card"
import CardAction from "~/components/interface/Card/CardAction"
import CardBody from "~/components/interface/Card/CardBody"
import CardMedia from "~/components/interface/Card/CardMedia"
import Chip from "~/components/interface/Chip"
import Container from "~/components/interface/ContainerBox"
import Icon from "~/components/interface/Icon"
import Link from "~/components/interface/Link"
import List, { ListItem, ListItemButton, ListItemIcon, ListItemText } from "~/components/interface/List"
import Text from "~/components/interface/Text"
import TextField from "~/components/interface/TextField"
import FormButton from "~/components/interface/TextField/FormButton"
import FormControl from "~/components/interface/TextField/FormControl"
import Input from "~/components/interface/TextField/Input"
import Accordion from "~/components/test/Accordion"
import ComboBoxAutoComplete from "~/components/test/ComboBoxAutoComplete"
import ListBoxSelector from "~/components/test/ListBoxSelector"
import MenuSample from "~/components/test/MenuSample"
import Modal from "~/components/test/Modal"
import ModalDrawer from "~/components/test/ModalDrawer"
import MovieCarousel from "~/components/test/MovieCarousel"
import TabSample from "~/components/test/TabSample"

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
                <div className="flex gap-x-4 flex-wrap">
                    <div className="flex flex-col gap-y-2">
                        <Text variant="caption">Non-interactive</Text>

                        <Chip variant="filled" color="default" label="Chip Label" />

                        <Chip variant="outlined" color="default" label="Chip Label" />

                        <Chip variant="filled" color="accent" label="Chip Label" />

                        <Chip variant="outlined" color="accent" label="Chip Label" />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Text variant="caption">Clickable</Text>

                        <Chip variant="filled" color="default" clickable label="Chip Label" />

                        <Chip variant="outlined" color="default" clickable label="Chip Label" />

                        <Chip variant="filled" color="accent" clickable label="Chip Label" />

                        <Chip variant="outlined" color="accent" clickable label="Chip Label" />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Text variant="caption">With Icon</Text>

                        <Chip
                            variant="filled"
                            color="default"
                            iconStart={<Icon size="sm" icon={StarIcon} />}
                            label="Chip Label"
                        />

                        <Chip
                            variant="outlined"
                            color="default"
                            iconStart={<Icon size="sm" icon={StarIcon} />}
                            label="Chip Label"
                        />

                        <Chip
                            variant="filled"
                            color="accent"
                            iconStart={<Icon size="sm" icon={StarIcon} />}
                            label="Chip Label"
                        />

                        <Chip
                            variant="outlined"
                            color="accent"
                            iconStart={<Icon size="sm" icon={StarIcon} />}
                            label="Chip Label"
                        />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Text variant="caption">Small Chip</Text>

                        <Chip variant="filled" color="default" label="Chip Label" size="xs" />

                        <Chip variant="outlined" color="default" label="Chip Label" size="xs" />

                        <Chip variant="filled" color="accent" label="Chip Label" size="xs" />

                        <Chip variant="outlined" color="accent" label="Chip Label" size="xs" />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Text variant="caption">Small Chip With Icon</Text>

                        <Chip
                            variant="filled"
                            color="default"
                            label="Chip Label"
                            size="xs"
                            iconStart={<Icon size="xs" icon={StarIcon} />}
                        />

                        <Chip
                            variant="outlined"
                            color="default"
                            label="Chip Label"
                            size="xs"
                            iconStart={<Icon size="xs" icon={StarIcon} />}
                        />

                        <Chip
                            variant="filled"
                            color="accent"
                            label="Chip Label"
                            size="xs"
                            iconStart={<Icon size="xs" icon={StarIcon} />}
                        />

                        <Chip
                            variant="outlined"
                            color="accent"
                            label="Chip Label"
                            size="xs"
                            iconStart={<Icon size="xs" icon={StarIcon} />}
                        />
                    </div>
                </div>
            </Wrapper>

            <Wrapper title="TextField">
                <div className="flex gap-x-4">
                    <div className="flex flex-col gap-y-4">
                        <TextField placeholder="Type something..." />

                        <FormControl>
                            <Input type="search" placeholder="Type something..." />
                            <FormButton iconStart={MagnifyingGlassIcon} />
                        </FormControl>
                    </div>
                </div>
            </Wrapper>

            <Wrapper title="Cards">
                <Card>
                    <CardAction href="/">
                        <CardMedia src="/image/arcane_poster.jpg" width="600" height="900" alt="Poster" />
                    </CardAction>

                    <CardBody>
                        <Text variant="h4">Card Title</Text>
                        <Text className="text-foreground-mute">Subtext</Text>
                    </CardBody>
                </Card>

                <Card layout="landscape">
                    <CardAction href="/">
                        <CardMedia src="/image/arcane_poster.jpg" width="100" height="150" alt="Poster" />
                    </CardAction>
                    <CardBody>
                        <div className="flex gap-x-1">
                            <Text variant="h4">Card Title</Text>
                            <Text className="text-foreground-mute">(Subtext)</Text>
                        </div>
                        <Chip
                            label="8.7"
                            color="accent"
                            size="xs"
                            iconStart={<Icon size="xs" icon={StarIcon} />}
                        />
                    </CardBody>
                </Card>

                <Card layout="landscape" data-card-size="bigger" className="w-full">
                    <CardAction href="/">
                        <CardMedia src="/image/arcane_poster.jpg" width="100" height="150" alt="Poster" />
                    </CardAction>
                    <CardBody>
                        <div className="flex gap-x-1">
                            <Text variant="h4">Card Title</Text>
                            <Text className="text-foreground-mute">(Subtext)</Text>
                        </div>
                        <Chip
                            label="8.7"
                            color="accent"
                            size="xs"
                            iconStart={<Icon size="xs" icon={StarIcon} />}
                        />
                        <Text className="line-clamp-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et temporibus itaque vel
                            quae laudantium, debitis veritatis rem enim consectetur expedita vitae eaque
                            deserunt ipsa perspiciatis in ratione repellendus. Labore, nesciunt.
                        </Text>
                    </CardBody>
                </Card>
            </Wrapper>

            <Wrapper title="Menu">
                <div>
                    <MenuSample />
                </div>
            </Wrapper>

            <Wrapper title="Carousel">
                <MovieCarousel heading="Movie" />
            </Wrapper>

            <Wrapper title="List">
                <div className="flex flex-wrap gap-x-4 w-full">
                    <List className="basis-60">
                        <ListItem className="bg-background">
                            <ListItemButton>
                                <ListItemText>Item 1</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem className="bg-background">
                            <ListItemButton>
                                <ListItemText>Item 2</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem className="bg-background">
                            <ListItemButton>
                                <ListItemText>Item 3</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>

                    <List className="basis-60">
                        <ListItem className="bg-background">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon icon={HomeIcon} />
                                </ListItemIcon>
                                <ListItemText>Item 1</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem className="bg-background">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon icon={HomeIcon} />
                                </ListItemIcon>
                                <ListItemText>Item 2</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem className="bg-background">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon icon={HomeIcon} />
                                </ListItemIcon>
                                <ListItemText>Item 3</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </div>
            </Wrapper>

            <Wrapper title="Tab">
                <TabSample />
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
