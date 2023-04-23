import { useEffect, useMemo, useRef } from 'react'

interface UseIntersectionObserverParams {
    root: HTMLElement | null
    onIntersect: () => void
}

export const useIntersectionObserver = ({
    root,
    onIntersect,
}: UseIntersectionObserverParams) => {
    const triggerRef = useRef<HTMLDivElement>(null)
    const trigger = useMemo(() => <div ref={triggerRef} />, [])
    const intersectionRef = useRef(false)
    const intersectionListenerRef = useRef(onIntersect)
    intersectionListenerRef.current = onIntersect

    useEffect(() => {
        const triggerElement = triggerRef.current

        if (!triggerElement) return

        const callback: IntersectionObserverCallback = ([entry]) => {
            if (entry.isIntersecting) {
                intersectionListenerRef.current()
            }
            intersectionRef.current = entry.isIntersecting
        }

        const options: IntersectionObserverInit = {
            root: root ?? document.body,
            rootMargin: '0px 0px 30% 0px',
        }

        const observer = new IntersectionObserver(callback, options)

        observer.observe(triggerElement)

        return () => {
            observer.unobserve(triggerElement)
        }
    }, [root])

    return { trigger, isIntersecting: intersectionRef.current }
}
