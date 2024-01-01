export default async function fetcher(url: RequestInfo, init?: RequestInit | undefined) {
    try {
        const response = await fetch(url, init)

        //! if (!response.ok) return undefined
        if (!response.ok) {
            throw new Error("Network response was not OK")
        }

        return response.json()
    } catch (error) {
        console.error("There has been a problem with your fetch operation.", error)
    }
}
