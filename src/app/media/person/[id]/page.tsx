import React from "react"
import { API_URL } from "~/constants/misc"
import fetcher from "~/functions/fetcher"

type PersonPageProps = {
    params: { id: string }
}

export async function generateMetadata({ params }: PersonPageProps) {
    const id = params.id
    const data = await fetcher(`${API_URL}person/${id}?language=en-US&api_key=${process.env.API_SECRET}`)

    if (!data || typeof data === "undefined") {
        return { title: "untitled" }
    }
    const { title, name } = data

    return { title: `${title || name} - Timawatch` }
}

export default function PersonPage({ params }: PersonPageProps) {
    return <main className="item-main">Page</main>
}
