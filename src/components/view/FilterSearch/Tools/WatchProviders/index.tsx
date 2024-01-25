"use client"
import Image from "next/image"
import React, { ComponentPropsWithoutRef, useContext } from "react"
import Input from "~/components/interface/TextField/Input"
import { API_URL, IMAGE_URL } from "~/constants/misc"
import style from "./style"
import useSWR from "swr"
import { MediaProps } from "~/types/data/media"
import { WatchProviderContext } from "../WatchProvider"
import fetcher from "~/functions/fetcher"
import Text from "~/components/interface/Text"

const { checkbox, image, item, container } = style()

export type WatchProvidersProps = {
    logo_path: string
    provider_id: number
    provider_name: string
}

interface WatchProvidersInterface {
    mediaType: MediaProps["media_type"]
}

const WatchProviders = ({ mediaType }: WatchProvidersInterface) => {
    const { selectedRegion } = useContext(WatchProviderContext)
    const {
        data: clientData,
        isLoading,
        error,
    } = useSWR(
        selectedRegion ? `/api/media/providers?media=${mediaType}&region=${selectedRegion}` : null,
        fetcher,
        {
            revalidateOnFocus: false,
        }
    )

    if (error) {
        return (
            <div className={container()}>
                {Array.from({ length: 16 }, (_, i) => (
                    <div key={i} className={item({ className: "bg-glass" })}></div>
                ))}
            </div>
        )
    }

    if (isLoading && !error) {
        return (
            <div className={container()}>
                {Array.from({ length: 16 }, (_, i) => (
                    <div key={i} className={item({ className: "bg-glass animate-pulse" })}></div>
                ))}
            </div>
        )
    }

    const data: WatchProvidersProps[] = clientData

    return (
        <div className={container()}>
            {data?.map?.((provider) => (
                <SelectProvider key={provider.provider_id} {...provider} />
            ))}
        </div>
    )
}

export default WatchProviders

interface SelectProviderProps extends ComponentPropsWithoutRef<"div"> {
    logo_path: string
    provider_id: number
    provider_name: string
}

function SelectProvider({ children, logo_path, provider_id, provider_name, ...rest }: SelectProviderProps) {
    return (
        <div {...rest} className={item()}>
            <Input type="checkbox" className={checkbox()} id={`${provider_name}-${provider_id}`} />
            <label htmlFor={`${provider_name}-${provider_id}`}>
                <Image
                    src={`${IMAGE_URL}original${logo_path}`}
                    alt={provider_name}
                    title={provider_name}
                    width={44}
                    height={44}
                    className={image()}
                />
            </label>
        </div>
    )
}
