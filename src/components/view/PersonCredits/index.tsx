"use client"
import React, { Fragment } from "react"
import Text from "~/components/interface/Text"
import { CastCreditsProps } from "~/types/data/combinedCredits"

type CrewCreditsProps = {
    job: string
    data: {
        year: string
        data: CastCreditsProps[]
    }[]
}[]

interface PersonCreditsProps {
    person: {
        year: string
        data: CastCreditsProps[]
    }[]
    crewCredits: CrewCreditsProps
    known_for_department: string
}

const PersonCredits = ({ person, crewCredits, known_for_department }: PersonCreditsProps) => {
    const castAndCrewCredits = [{ job: "acting", data: person }, ...crewCredits]
    const creditsList = KnownFor(known_for_department.toLocaleLowerCase(), castAndCrewCredits)
    console.log("crew:", creditsList)

    return <></>
}

export default PersonCredits

function KnownFor(known: string, data: CrewCreditsProps) {
    const crewDepartments = Object.values(data).map((item) => item.job)
    let knownForOnTop: { job: string }[] = []

    const index = crewDepartments.indexOf(known)
    const deptName = crewDepartments[index]
    const removeDeptName = crewDepartments.filter((item) => item !== deptName)

    if (!removeDeptName.includes(deptName)) {
        removeDeptName.unshift(deptName)
        knownForOnTop = removeDeptName.map((item) => ({
            job: item,
        }))
    }
    const finalResult = knownForOnTop.map((job, i) => ({
        ...job,
        data: data.find((item) => item.job === knownForOnTop[i].job)?.data,
    }))

    return finalResult
}
