"use client"
import React, { ReactNode, createContext, useState } from "react"

interface WatchProviderContextProps {
    selectedRegion: string
    setSelectedRegion: React.Dispatch<React.SetStateAction<string>>
}
export const WatchProviderContext = createContext<WatchProviderContextProps>({
    selectedRegion: "",
    setSelectedRegion: () => {},
})

interface WatchProviderProps {
    children: ReactNode
}

const WatchProvider = ({ children }: WatchProviderProps) => {
    const [selectedRegion, setSelectedRegion] = useState("")

    return (
        <WatchProviderContext.Provider value={{ selectedRegion, setSelectedRegion }}>
            {children}
        </WatchProviderContext.Provider>
    )
}

export default WatchProvider
