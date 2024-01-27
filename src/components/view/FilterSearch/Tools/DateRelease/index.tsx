"use client"
import React, { useState } from "react"
import Input from "~/components/interface/TextField/Input"
import advanceDateTo from "~/functions/advanceDateTo"
import getDate from "~/functions/getDate"

interface DateReleaseProps {
    dates: {
        maximum: string
        minimum: string | undefined
    }
}

const DateRelease = ({ dates }: DateReleaseProps) => {
    const [max, setMax] = useState(dates.maximum ? dates.maximum : getDate(advanceDateTo()))
    const [min, setMin] = useState(dates.minimum)

    return (
        <div className="flex flex-col gap-y-2.5">
            <Input
                type="date"
                value={min}
                onChange={(e) => setMin(e.target.value)}
                className="bg-background-light rounded-xl"
            />
            <Input
                type="date"
                value={max}
                onChange={(e) => setMax(e.target.value)}
                className="bg-background-light rounded-xl"
            />
        </div>
    )
}

export default DateRelease
