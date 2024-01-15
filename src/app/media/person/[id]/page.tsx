import Image from "next/image"
import React from "react"
import CollapseText from "~/components/interface/CollapseText"
import Text from "~/components/interface/Text"
import { API_URL, IMAGE_URL } from "~/constants/misc"
import dynamicPerson from "~/data/dynamicPerson"
import fetcher from "~/functions/fetcher"
import getAge from "~/functions/getAge"
import getDateFormat from "~/functions/getDateFormat"

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

    const dateOfBirth = getDateFormat(birthday, { dateFormat: "full-date-long-month" })
    const personAge = getAge(birthday)
    const bio = biography.split("\n").filter(text => text)
    console.log(bio.length)

    return (
        <main className="item-main grid grid-cols-1 gap-y-8">
            {/* //todo ACTOR's AVATAR */}
            <Image
                src={`${IMAGE_URL}w500${profile_path}`}
                alt={name}
                width={600}
                height={900}
                className="object-contain aspect-portrait rounded-xl shadow-glass"
            />
            {/* //todo PERSONAL INFO */}
            <section className="flex flex-col gap-y-4">
                <Info heading="Known for" label={known_for_department} />
                <Info heading="Known credits" label={combined_credits.cast.length} />
                <Info heading="Gender" label={GENDER[gender]} />
                <Info heading="Birthday" label={`${dateOfBirth} (${personAge})`} />
                <Info heading="Place of birth" label={place_of_birth} />
                <Info heading="Also known as" label={also_known_as} />
            </section>

            {/* //todo NAME & BIOGRAPHY */}
            <section className="flex flex-col gap-y-8">
                <Text variant="h2" as="h2">
                    {name}
                </Text>
                <CollapseText clamp={6}>
                    <Text as="p">{biography}</Text>
                </CollapseText>
            </section>
        </main>
    )
}

function Info({ heading, label }: { heading: string; label: string | number | string[] }) {
    return (
        <div className="flex flex-col gap-y-2.5">
            <Text variant="h3" as="h3" className="capitalize">
                {heading}
            </Text>

            {Array.isArray(label) ? (
                <div className="flex flex-col gap-y-2.5">
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
