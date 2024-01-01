export default function getAge(birthdate: string) {
    const getBirthdate = new Date(birthdate)
    const getCurrentDate = new Date()

    let age = getCurrentDate.getFullYear() - getBirthdate.getFullYear()
    const m = getCurrentDate.getMonth() - getBirthdate.getMonth()

    if (m < 0 || (m === 0 && getCurrentDate.getDate() < getBirthdate.getDate())) {
        age--
    }
    return age
}
