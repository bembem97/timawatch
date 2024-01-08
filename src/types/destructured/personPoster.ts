import { PersonListProps, PersonProps } from "../data/person"

export interface PersonPosterProps {
    id: PersonProps["id"]
    name: PersonProps["name"]
    profile_path: PersonProps["profile_path"]
}

export interface PersonPostersProps {
    page: PersonListProps["page"]
    results: PersonPosterProps[]
    total_pages: PersonListProps["total_pages"]
    total_results: PersonListProps["total_results"]
}
