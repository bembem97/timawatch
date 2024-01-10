export default function hasLength(str: string) {
    // return false if str is empty, null, undefined, or contains only whitespace
    // return true if str has length

    return !(!str || /^\s*$/.test(str))
}
