import Card, { CardBody, CardMedia } from "~/components/interface/Card"
import Spinner from "~/components/interface/Spinner"
import Text from "~/components/interface/Text"
import { IMAGE_URL } from "~/constants/misc"
import { MediaListProps, MediaProps } from "~/types/data/media"
import { PersonListProps, PersonProps } from "~/types/data/person"
import React from "react"

interface SearchResultProps {
    data: MediaListProps | PersonListProps
    isError: boolean
    isLoading: boolean
}

const SearchResult = ({ data, isError, isLoading }: SearchResultProps) => {
    if (isError) return <Text variant="h4">An error has occured.</Text>

    if (isLoading)
        return (
            <div className="flex justify-center bg-background">
                <Spinner size="lg" />
            </div>
        )

    return (
        <div className="bg-background rounded-lg [contain:paint]">
            <div className="p-2 flex flex-col gap-y-1">
                {!isLoading &&
                    data &&
                    data.results
                        .sort((a, b) => b.popularity - a.popularity)
                        .map(({ media_type, ...rest }) => {
                            if (media_type === "person") {
                                const { name, id, profile_path } = rest as PersonProps
                                return (
                                    <Card key={id} elevation={0} className="even:bg-background-light p-2">
                                        <CardMedia
                                            alt=""
                                            src={`${IMAGE_URL}w500${profile_path}`}
                                            width={45}
                                            height={60}
                                        />
                                        <CardBody>{name}</CardBody>
                                    </Card>
                                )
                            }
                            const { title, id, name, poster_path, first_air_date, release_date } =
                                rest as MediaProps
                            const dateObject = new Date(first_air_date || release_date || "")
                            const isValidDate = !isNaN(dateObject.getTime())
                            return (
                                <Card key={id} elevation={0} className="even:bg-background-light p-2">
                                    <CardMedia
                                        alt=""
                                        src={`${IMAGE_URL}w500${poster_path}`}
                                        width={45}
                                        height={60}
                                    />
                                    <CardBody>
                                        <Text>{title || name}</Text>
                                        <Text>{isValidDate && dateObject.getFullYear()}</Text>
                                    </CardBody>
                                </Card>
                            )
                        })}
            </div>
        </div>
    )
}

export default SearchResult
