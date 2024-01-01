import fetcher from "~/functions/fetcher"
import useSWR from "swr"

export default function useSearchFilter(query: string) {
    const { isLoading, error, data } = useSWR(query ? `/api/media?query=${query}` : null, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        keepPreviousData: true,
    })

    return { isLoading, error, data }
}
