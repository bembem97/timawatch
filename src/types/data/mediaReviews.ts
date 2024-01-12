export type ReviewProps = {
    author: string
    author_details: {
        name: string
        username: string
        avatar_path: string | null
        rating: number
    }
    content: string
    created_at: string
    id: string
    updated_at: string
    url: string
}

export type ReviewDataProps = {
    id: number
    page: number
    results: ReviewProps[]
    total_pages: number
    total_results: number
}
