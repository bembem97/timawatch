"use client"
import React from "react"
import Disclosure, {
    DisclosureButton,
    DisclosureContent,
    DisclosurePanel,
} from "~/components/interface/Disclosure"
import Link from "~/components/interface/Link"
import Text from "~/components/interface/Text"
import { CastCreditsProps, CrewCreditsProps } from "~/types/data/combinedCredits"

export type AllCrewCreditsProps = {
    department: string
    data: {
        year: string
        data: CastCreditsProps[] | CrewCreditsProps[]
    }[]
}

type PersonActingCreditsProps = {
    year: string
    data: CastCreditsProps[]
}

interface PersonCreditsProps {
    person: PersonActingCreditsProps[]
    crewCredits: AllCrewCreditsProps[]
    known_for_department: string
}

const PersonCredits = ({ person, crewCredits, known_for_department }: PersonCreditsProps) => {
    const castAndCrewCredits: AllCrewCreditsProps[] = [{ department: "acting", data: person }, ...crewCredits]
    const creditsList = KnownFor(known_for_department.toLocaleLowerCase(), castAndCrewCredits)

    return (
        <>
            {creditsList.map(({ department, data: byYearData }, i) => (
                <Disclosure key={i} defaultOpen as="div" className="disclosure">
                    <DisclosureButton className="text-lg text-accent-light">{department}</DisclosureButton>
                    <DisclosurePanel>
                        <DisclosureContent>
                            {byYearData &&
                                byYearData?.map(({ data: credits, year }, i) => (
                                    <div key={i} className="mb-4">
                                        <Text variant="h3" className="mb-2.5 block">
                                            {year === "N/A" ? "---" : year}
                                        </Text>

                                        <div className="px-4 py-2.5 flex flex-col gap-y-2.5 rounded-xl bg-background-light/60">
                                            {credits.map(({ id, title, media_type, name, ...prop }) => {
                                                if ("character" in prop) {
                                                    const { character } = prop

                                                    return (
                                                        <div
                                                            key={`${id}-${character}`}
                                                            className="flex flex-col gap-y-1"
                                                        >
                                                            <Link
                                                                href={`/media/${media_type}/${id}`}
                                                                variant="h4"
                                                                className="hover:underline"
                                                            >
                                                                {title || name}
                                                            </Link>
                                                            <Text className="text-foreground-mute">
                                                                {character ? `as ${character}` : ""}
                                                            </Text>
                                                        </div>
                                                    )
                                                }
                                                const { job } = prop

                                                return (
                                                    <div
                                                        key={`${id}-${job}`}
                                                        className="flex flex-col gap-y-1"
                                                    >
                                                        <Link
                                                            href={`/media/${media_type}/${id}`}
                                                            variant="h4"
                                                            className="hover:underline"
                                                        >
                                                            {title || name}
                                                        </Link>
                                                        <Text className="text-foreground-mute">{job}</Text>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                ))}
                        </DisclosureContent>
                    </DisclosurePanel>
                </Disclosure>
            ))}
        </>
    )
}

export default PersonCredits

function KnownFor(known: string, data: AllCrewCreditsProps[]) {
    const crewDepartments = Object.values(data).map((item) => item.department)
    let knownForOnTop: { department: string }[] = []

    const index = crewDepartments.indexOf(known)
    const deptName = crewDepartments[index]
    const removeDeptName = crewDepartments.filter((item) => item !== deptName)

    if (!removeDeptName.includes(deptName)) {
        removeDeptName.unshift(deptName)
        knownForOnTop = removeDeptName.map((item) => ({
            department: item,
        }))
    }

    const finalResult = knownForOnTop.map((department, i) => ({
        ...department,
        data: data.find((item) => item.department === knownForOnTop[i].department)?.data,
    }))

    return finalResult
}
