import { PersonListProps } from "~/types/data/person"
import { PersonPostersProps } from "~/types/destructured/personPoster"

export default function personDestructuring(
    data: PromiseSettledResult<PersonListProps>
): PersonPostersProps | undefined {
    if ("status" in data && data.status === "rejected") {
        return
    }

    const results = data.value.results.map(({ id, name, media_type, profile_path }) => ({
        id,
        name,
        media_type,
        profile_path,
    }))

    return { ...data.value, results }
}
