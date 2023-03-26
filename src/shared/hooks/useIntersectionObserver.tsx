import { useEffect, useMemo, useRef } from 'react'

interface UseIntersectionObserverParams {
    onIntersect: () => void
}

export const useIntersectionObserver = ({
    onIntersect,
}: UseIntersectionObserverParams) => {
    const triggerRef = useRef<HTMLDivElement>(null)
    const trigger = useMemo(() => <div ref={triggerRef} />, [])
    const intersectionRef = useRef(false)

    useEffect(() => {
        const triggerElement = triggerRef.current
        if (!triggerElement) return
        const callback: IntersectionObserverCallback = ([entry]) => {
            if (entry.isIntersecting) {
                onIntersect()
            }
            intersectionRef.current = entry.isIntersecting
        }

        const options: IntersectionObserverInit = {
            root: document.body,
            rootMargin: '0px',
            threshold: 1.0,
        }

        const observer = new IntersectionObserver(callback, options)

        observer.observe(triggerElement)

        return () => {
            observer.unobserve(triggerElement)
        }
    }, [onIntersect])

    return { trigger, intersectionRef }
}
