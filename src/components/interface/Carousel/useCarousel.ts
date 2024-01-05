import { MutableRefObject, useCallback, useEffect, useState } from "react"

type TargetProps = HTMLDivElement | null
type RefProps = MutableRefObject<TargetProps>

export default function useCarousel(ref: RefProps) {
    const [scroll, setScroll] = useState(0)
    const [mutePrev, setMutePrev] = useState(true)
    const [muteNext, setMuteNext] = useState(false)

    const scrollRight = () => {
        if (ref.current)
            ref.current.scrollBy({
                left: scroll,
                behavior: "smooth",
            })
    }

    const scrollLeft = () => {
        if (ref.current)
            ref.current.scrollBy({
                left: -scroll,
                behavior: "smooth",
            })
    }

    const onScrollCb = useCallback(() => {
        const target = ref.current

        if (target) {
            const fullScroll = Number(Math.ceil(target.scrollLeft + target.clientWidth).toFixed(0))
            const nextMuted = fullScroll >= target.scrollWidth
            const prevMuted = target.scrollLeft === 0

            if (nextMuted) {
                setMuteNext(true)
            } else {
                setMuteNext(false)
            }

            if (prevMuted) {
                setMutePrev(true)
            } else {
                setMutePrev(false)
            }
        }
    }, [ref, setMuteNext, setMutePrev])

    useEffect(() => {
        const target = ref.current
        const multiplier = 0.7

        if (target) {
            setScroll(target.clientWidth * multiplier)
            target.addEventListener("scroll", onScrollCb)
        }

        // todo: Triggers when device resizes
        const onResizeCb = () => target && setScroll(target.clientWidth * multiplier)
        window.addEventListener("resize", onResizeCb)

        return () => window.removeEventListener("resize", onResizeCb)
    }, [ref, setScroll, onScrollCb])

    useEffect(() => {
        const target = ref.current
        if (target && target.clientWidth === target.scrollWidth) setMuteNext(true)
    }, [ref])

    return { scrollLeft, scrollRight, mutePrev, muteNext }
}
