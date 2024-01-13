export type MediaImageProps = {
    aspect_ratio: number
    height: number
    iso_639_1: string
    file_path: string
    vote_average: number
    vote_count: number
    width: number
}

export type MediaImageDataProps = {
    backdrops: MediaImageProps[]
    id: number
    logos: MediaImageProps[]
    posters: MediaImageProps[]
}
