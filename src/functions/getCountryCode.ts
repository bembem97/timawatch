import fetcher from "~/functions/fetcher"

export default async function getCountryCode() {
    const ipapi = await fetcher("https://ipapi.co/json")
    const { country_code } = ipapi
    return country_code
}
