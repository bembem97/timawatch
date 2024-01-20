import Image from "next/image"
import React from "react"
import Card from "~/components/interface/Card"
import CollapseText from "~/components/interface/CollapseText"
import Text from "~/components/interface/Text"
import KnownFor from "~/components/view/KnownForCarousel"
import PersonCredits, { AllCrewCreditsProps } from "~/components/view/PersonCredits"
import { API_URL, IMAGE_URL } from "~/constants/misc"
import dynamicPerson from "~/data/dynamicPerson"
import fetcher from "~/functions/fetcher"
import getAge from "~/functions/getAge"
import getDateFormat from "~/functions/getDateFormat"
import { CastCreditsProps, CrewCreditsProps } from "~/types/data/combinedCredits"

type PersonPageProps = {
    params: { id: string }
}

const GENDER = ["Not set / not specified", "Female", "Male", "Non-binary"]

export async function generateMetadata({ params }: PersonPageProps) {
    const id = params.id
    const data = await fetcher(`${API_URL}person/${id}?language=en-US&api_key=${process.env.API_SECRET}`)

    if (!data || typeof data === "undefined") {
        return { title: "untitled" }
    }
    const { title, name } = data

    return { title: `${title || name} - Timawatch` }
}

export default async function PersonPage({ params }: PersonPageProps) {
    const data = await dynamicPerson(params.id)
    const {
        also_known_as,
        biography,
        birthday,
        combined_credits,
        deathday,
        gender,
        id,
        known_for_department,
        name,
        place_of_birth,
        profile_path,
    } = data

    let dateOfDeath

    if (deathday) {
        dateOfDeath = getDateFormat(deathday, { dateFormat: "full-date-long-month" })
    }

    const dateOfBirth = getDateFormat(birthday, { dateFormat: "full-date-long-month" })
    const personAge = getAge(birthday)
    const bio = biography.split("\n").filter((text) => text)

    // todo: Group Credits By Year Release
    const castCreditsGroupedByYear = groupCreditsByYear(combined_credits.cast)
    const crewCreditsGroupedByYear = groupCreditsByYear(combined_credits.crew)
    const actorCastCredits = sortByYearDesc(castCreditsGroupedByYear)

    const crewDepartment: AllCrewCreditsProps[] = groupByCrewDepartment(crewCreditsGroupedByYear)

    return (
        <main className="item-main px-2 py-1 gap-y-4 personal-details">
            <div className="pd-box">
                {/* //todo ACTOR's AVATAR */}
                <div className="flex flex-col gap-y-4 pd-img">
                    <Image
                        src={`${IMAGE_URL}w500${profile_path}`}
                        alt={name}
                        width={600}
                        height={900}
                        className="rounded-xl justify-self-center w-full max-w-[theme(width.80)] 2xl:max-w-xs mx-auto"
                    />
                </div>
                <div className="pd-name mt-2.5 mb-4 @xl/main:mt-0 @xl/main:mb-0">
                    <Text variant="h2" as="h2" className="text-center @xl/main:text-left">
                        {name}
                    </Text>
                </div>
                {/* //todo PERSONAL INFO */}
                <section className="grid grid-cols-[repeat(auto-fit,minmax(144px,auto))] @xl/main:flex @xl/main:flex-col gap-y-2.5 pd-info">
                    <Info heading="Known for" label={known_for_department} />
                    <Info heading="Known credits" label={combined_credits.cast.length} />
                    <Info heading="Gender" label={GENDER[gender]} />
                    <Info heading="Birthday" label={`${dateOfBirth} (${personAge})`} />
                    <Info heading="Place of birth" label={place_of_birth} />
                    {dateOfDeath && <Info heading="DeathDay" label={dateOfDeath} />}
                    <Info heading="Also known as" label={also_known_as} />
                </section>
                {/* //todo BIOGRAPHY / SHOWS AN ACTOR KNOWN FOR / ACTOR's COMPLETE CREDITS */}
                <section className="flex flex-col gap-y-2.5 pd-bio">
                    <Text variant="h3">Biography</Text>
                    <CollapseText clamp={6}>
                        {bio.map((text, i) => (
                            <Text key={i} as="p" className="mb-4 text-foreground-mute">
                                {text}
                            </Text>
                        ))}
                    </CollapseText>

                    <KnownFor data={combined_credits.cast} />

                    <PersonCredits
                        person={actorCastCredits}
                        crewCredits={crewDepartment}
                        known_for_department={known_for_department}
                    />
                </section>
            </div>
        </main>
    )
}

function Info({ heading, label }: { heading: string; label: string | number | string[] }) {
    return (
        <div className="flex flex-col">
            <Text variant="h3" as="h3" className="capitalize">
                {heading}
            </Text>

            {Array.isArray(label) ? (
                <div className="flex flex-col">
                    {label.map((text, i) => (
                        <Text key={i} className="capitalize text-foreground-mute">
                            {text}
                        </Text>
                    ))}
                </div>
            ) : (
                <Text className="capitalize text-foreground-mute">{label}</Text>
            )}
        </div>
    )
}

function groupCreditsByYear(data: CastCreditsProps[] | CrewCreditsProps[]) {
    const groupCreditsByYear = data.reduce((acc, curr) => {
        const date = curr.first_air_date || curr.release_date || undefined
        const year = getDateFormat(date, { dateFormat: "year-only" })

        if (!acc[year]) {
            acc[year] = []
        }

        if ("character" in curr) {
            acc[year].push(curr)
            return acc
        }

        acc[year].push(curr)
        return acc
    }, {} as { [key: string]: CastCreditsProps[] & CrewCreditsProps[] })

    return groupCreditsByYear
}

function sortByYearDesc(data: { [key: string]: CastCreditsProps[] }) {
    const sortByYearDesc = Object.keys(data).sort((a, b) => Number(b) - Number(a))

    let lastIndex

    if (sortByYearDesc[sortByYearDesc.length - 1] === "N/A") {
        lastIndex = sortByYearDesc.pop()
    }

    if (typeof lastIndex !== "undefined") {
        sortByYearDesc.unshift(lastIndex)
    }

    const creditsGroupedByYear = sortByYearDesc.map((year) => ({
        year,
        data: data[year as keyof typeof data],
    }))

    return creditsGroupedByYear
}

function groupByCrewDepartment(data: { [key: string]: CastCreditsProps[] & CrewCreditsProps[] }) {
    const crewDepartment = Object.values(data)

    const groupedByDepartment = crewDepartment.flat().reduce((acc, cur) => {
        const department = cur.department.toLocaleLowerCase()

        if (!acc[department as keyof typeof acc]) {
            acc[department] = []
        }
        acc[department].push(cur)
        return acc
    }, {} as { [key: string]: CrewCreditsProps[] })

    const getDepartmentName = Object.keys(groupedByDepartment)
    const mapDepartment = getDepartmentName.map((department) => ({
        department,
        data: sortByYearDesc(groupCreditsByYear(groupedByDepartment[department])),
    }))

    return mapDepartment
}
