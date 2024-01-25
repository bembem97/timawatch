export type MediaCertificationsProps = {
    certification: string
    meaning: string
    order: number
}

export type MediaCertificationsDataProps = {
    certifications: {
        [key: string]: MediaCertificationsProps[]
    }
}
