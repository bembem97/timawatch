import { MediaListProps, MediaProps } from "../data/media"

export interface MediaPosterProps {
    id: MediaProps["id"]
    name?: MediaProps["name"]
    title?: MediaProps["title"]
    vote_average: MediaProps["vote_average"]
    first_air_date: MediaProps["first_air_date"]
    release_date: MediaProps["release_date"]
    poster_path: MediaProps["poster_path"]
}

export interface MediaPostersProps {
    page: MediaListProps["page"]
    results: MediaPosterProps[]
    total_pages: MediaListProps["total_pages"]
    total_results: MediaListProps["total_results"]
}
