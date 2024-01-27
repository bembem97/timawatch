"use client"
import React from "react"
import Chip from "~/components/interface/Chip"
import Text from "~/components/interface/Text"
import { FilterGenresProps } from "~/types/destructured/filterSearch"

interface GenresProps {
    data: FilterGenresProps[] | undefined
}

const Genres = ({ data }: GenresProps) => {
    if (typeof data === "undefined") {
        return (
            <div className="p-1">
                <Text variant="h3" className="text-danger-foreground">
                    No Genre Available.
                </Text>
            </div>
        )
    }

    return (
        <div className="flex flex-wrap gap-2.5">
            {data.map(({ id, name }) => (
                <Chip key={id} label={name} clickable variant="outlined" />
            ))}
        </div>
    )
}

export default Genres
