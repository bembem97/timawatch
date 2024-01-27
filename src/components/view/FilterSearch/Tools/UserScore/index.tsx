"use client"
import React, { useState, useEffect } from "react"
import TextField from "~/components/interface/TextField"

const UserScore = () => {
    const [max, setMax] = useState(10)
    const [min, setMin] = useState(0)

    const handleMinScoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newMinScore = Math.max(0, Math.min(10, Number(event.target.value)))
        setMin(newMinScore)
        if (newMinScore > max) {
            setMax(newMinScore)
        }
    }

    const handleMaxScoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newMaxScore = Math.max(0, Math.min(10, Number(event.target.value)))
        setMax(newMaxScore)
        if (newMaxScore < min) {
            setMin(newMaxScore)
        }
    }

    return (
        <div className="flex gap-x-2">
            <TextField
                min="0"
                max="10"
                value={min}
                onChange={handleMinScoreChange}
                formcontrolProps={{ className: "basis-auto grow shrink min-w-0" }}
            />
            <TextField
                min="0"
                max="10"
                value={max}
                onChange={handleMaxScoreChange}
                formcontrolProps={{ className: "basis-auto grow shrink min-w-0" }}
            />
        </div>
    )
}

export default UserScore
