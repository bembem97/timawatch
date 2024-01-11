import { MediaListProps, MediaProps } from "../data/media"

export interface MediaPosterProps {
    first_air_date: MediaProps["first_air_date"]
    id: MediaProps["id"]
    media_type: MediaProps["media_type"]
    name?: MediaProps["name"]
    poster_path: MediaProps["poster_path"]
    release_date: MediaProps["release_date"]
    title?: MediaProps["title"]
    vote_average: MediaProps["vote_average"]
}

export interface MediaPostersProps {
    page: MediaListProps["page"]
    results: MediaPosterProps[]
    total_pages: MediaListProps["total_pages"]
    total_results: MediaListProps["total_results"]
}
