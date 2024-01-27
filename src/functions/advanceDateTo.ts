export default function advanceDateTo() {
    const currentDate = new Date()
    const advanceDate = currentDate.setMonth(currentDate.getMonth() + 5)

    return advanceDate
}
