import Card, { CardBody, CardMedia } from "~/components/interface/Card"
import Spinner from "~/components/interface/Spinner"
import Text from "~/components/interface/Text"
import { IMAGE_URL } from "~/constants/misc"
import { MediaListProps, MediaProps } from "~/types/data/media"
import { PersonListProps, PersonProps } from "~/types/data/person"
import React, { ComponentPropsWithoutRef } from "react"
// import style from "../style"
import Chip from "~/components/interface/Chip"
import { StarIcon } from "@heroicons/react/20/solid"
import Icon from "~/components/interface/Icon"
import Link from "next/link"
import { ComboBoxOption, ComboBoxOptions } from "~/components/interface/ComboBox"
import comboboxStyle from "~/components/interface/ComboBox/style"
import { VariantProps } from "tailwind-variants"

const { options } = comboboxStyle()

type SearchResultProps = VariantProps<typeof comboboxStyle> &
    ComponentPropsWithoutRef<typeof ComboBoxOptions> & {
        data: MediaListProps | PersonListProps
        isError: boolean
        isLoading: boolean
    }

const SearchResult = ({ data, isError, isLoading, inComponent, ...rest }: SearchResultProps) => {
    const className = rest.className

    if (isError)
        return (
            <ComboBoxOptions {...rest} as="div" className={options({ className })}>
                <div className="p-2 flex flex-col gap-y-2">
                    <Text variant="h4">An error has occured.</Text>
                </div>
            </ComboBoxOptions>
        )

    if (isLoading)
        return (
            <ComboBoxOptions {...rest} as="div" className={options({ className })}>
                <div className="p-2 flex flex-col gap-y-2">
                    <div className="flex justify-center bg-background">
                        <Spinner size="lg" />
                    </div>
                </div>
            </ComboBoxOptions>
        )

    return (
        !isLoading &&
        typeof data !== "undefined" &&
        data.results.length > 0 && (
            <ComboBoxOptions {...rest} as="div" className={options({ className, inComponent })}>
                <ul className="p-2 flex flex-col">{data.results.map(searchResultList)}</ul>
            </ComboBoxOptions>
        )
    )
}

export default SearchResult

function searchResultList({ media_type, ...rest }: MediaProps | PersonProps) {
    if (media_type === "person" && "profile_path" in rest) {
        const { name, id, profile_path } = rest

        return (
            <ComboBoxOption key={id} value={rest} className="pl-4">
                <Link href={`/media/person/${id}`}>
                    <Card layout="landscape">
                        <CardMedia
                            alt=""
                            src={`${IMAGE_URL}w500${profile_path}`}
                            width={45}
                            height={60}
                            className="aspect-[100/115] object-cover rounded-md"
                        />
                        <CardBody>
                            <Text className="line-clamp-1">{name}</Text>
                        </CardBody>
                    </Card>
                </Link>
            </ComboBoxOption>
        )
    }

    const { title, id, name, poster_path, first_air_date, release_date, vote_average } = rest as MediaProps
    const dateObject = new Date(first_air_date || release_date || "")
    const isValidDate = !isNaN(dateObject.getTime())

    return (
        <ComboBoxOption key={id} value={rest} className="pl-4 [&]:ui-active:bg-background-dark">
            <Link href={`/media/${media_type}/${id}`}>
                <Card layout="landscape">
                    <CardMedia
                        alt=""
                        src={`${IMAGE_URL}w500${poster_path}`}
                        width={45}
                        height={60}
                        className="aspect-[100/115] object-cover rounded-md"
                    />
                    <CardBody>
                        <Text className="line-clamp-1">{title || name}</Text>
                        <div className="flex items-center gap-x-2">
                            <Chip
                                label={vote_average}
                                size="xs"
                                variant="outlined"
                                iconStart={<Icon icon={StarIcon} size="xs" />}
                                className="text-foreground-mute"
                            />
                            <Text className="text-foreground-mute">
                                {isValidDate && dateObject.getFullYear()}
                            </Text>
                        </div>
                    </CardBody>
                </Card>
            </Link>
        </ComboBoxOption>
    )
}
