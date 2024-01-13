type FormatProps = {
    options?: Intl.DateTimeFormatOptions
    dateFormat?: "full-date-long-month" | "full-date-short-month" | "year-only"
}

export default function getDateFormat(
    date?: string,
    format: FormatProps = { dateFormat: undefined, options: undefined }
) {
    let dateObj: Date

    if (date === null || typeof date === "undefined") {
        return "N/A"
    } else if (!date) {
        dateObj = new Date()

        if (isNaN(dateObj.getTime())) {
            throw new Error("Invalid date string")
        }
    } else {
        dateObj = new Date(date)

        if (isNaN(dateObj.getTime())) {
            throw new Error("Invalid date string")
        }
    }

    const fullDateLongMonth: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    const fullDateShortMonth: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" }
    const yearOnly: Intl.DateTimeFormatOptions = { year: "numeric" }

    const formatOptions =
        (format.dateFormat === "full-date-long-month" && fullDateLongMonth) ||
        (format.dateFormat === "full-date-short-month" && fullDateShortMonth) ||
        (format.dateFormat === "year-only" && yearOnly) ||
        format.options

    let formatter = new Intl.DateTimeFormat("en-US", formatOptions)
    return formatter.format(dateObj)
}
