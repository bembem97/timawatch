"use client"
import React, { ComponentPropsWithoutRef, useState, useRef, RefObject, useEffect, CSSProperties } from "react"
import style from "./style"
import { VariantProps } from "tailwind-variants"
import Text from "../Text"
import Button from "../Button"
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid"

const { base, text } = style()

type CollapseTextProps = VariantProps<typeof style> &
    ComponentPropsWithoutRef<"div"> & {
        textProps?: ComponentPropsWithoutRef<typeof Text>
        clamp: number | "none"
    }

const CollapseText = ({ children, textProps, clamp, ...rest }: CollapseTextProps) => {
    const [expand, setExpand] = useState(false)
    const target = useRef<HTMLDivElement | null>(null)
    const isClamped = useTextClamped(target)

    const expandHandler = () => setExpand(!expand)

    const textClassName = textProps?.className
    const textClassNames = text({ className: textClassName, expand })
    const textStyle = { "--line-clamp": clamp } as CSSProperties

    return (
        <div {...rest} className={base()}>
            <div ref={target} style={textStyle} className={textClassNames}>
                {children}
            </div>

            {isClamped && (
                <Button
                    onClick={expandHandler}
                    color="accent"
                    className="self-center"
                    iconEnd={expand ? ArrowUpIcon : ArrowDownIcon}
                >
                    {expand ? "Read less" : "Read more"}
                </Button>
            )}
        </div>
    )
}

export default CollapseText

function useTextClamped(ref: RefObject<Element>) {
    const [isClamped, setIsClamped] = useState(false)

    useEffect(() => {
        const target = ref.current
        if (target) target.scrollHeight > target.clientHeight ? setIsClamped(true) : setIsClamped(false)

        const changeClampOnResize = () => {
            if (target) target.scrollHeight > target.clientHeight ? setIsClamped(true) : setIsClamped(false)
        }

        window.addEventListener("resize", changeClampOnResize)

        return () => window.removeEventListener("resize", changeClampOnResize)
    }, [ref, setIsClamped])

    return isClamped
}
