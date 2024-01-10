import { useState } from "react"
import useSWR from "swr"
import fetcher from "~/functions/fetcher"

export default function useSearchQuery() {
    const [search, setSearch] = useState<string | null | undefined>(null)
    const checkQuery = search !== null

    const {
        isLoading,
        error: isError,
        data,
    } = useSWR(checkQuery ? `/api/media/search?query=${search}` : null, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        keepPreviousData: true,
    })

    return { search, setSearch, isLoading, isError, data }
}
