import fetcher from "~/functions/fetcher"

export default async function getCountryCode() {
    const ipapi = await fetcher("https://ipapi.co/json")
    let code

    if (typeof ipapi === "undefined") {
        return "PH"
    }

    const { country_code } = ipapi
    return country_code
}
