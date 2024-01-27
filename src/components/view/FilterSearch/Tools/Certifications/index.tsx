"use client"
import React from "react"
import Chip from "~/components/interface/Chip"
import Text from "~/components/interface/Text"
import { FilterCertificationsProps } from "~/types/destructured/filterSearch"

interface CertificationsProps {
    data: FilterCertificationsProps[] | undefined
}

const Certifications = ({ data }: CertificationsProps) => {
    if (typeof data === "undefined") {
        return (
            <div className="p-1">
                <Text variant="h3" className="text-danger-foreground">
                    No Certifications.
                </Text>
            </div>
        )
    }

    return (
        <div className="flex flex-wrap gap-2.5">
            {data.map((certification) => (
                <Chip key={certification} label={certification} clickable />
            ))}
        </div>
    )
}

export default Certifications
