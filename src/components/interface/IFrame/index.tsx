import React, { ComponentPropsWithoutRef } from "react"

interface IFrameProps extends ComponentPropsWithoutRef<"iframe"> {
    videoId: string
}

const IFrame = ({ videoId, ...rest }: IFrameProps) => {
    const className = rest.className
    return (
        <iframe
            {...rest}
            className={className}
            allowFullScreen
            width={650}
            height={315}
            title="YouTube video player"
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
    )
}

export default IFrame
