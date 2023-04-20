import { useEffect, useRef } from 'react'

export const useEventHandler = <K extends keyof WindowEventMap>(
    event: K,
    listener: (ev: WindowEventMap[K]) => any
) => {
    const listenerRef = useRef(listener)
    listenerRef.current = listener

    useEffect(() => {
        const trigger = (event: WindowEventMap[K]) => {
            listenerRef.current(event)
        }
        window.addEventListener(event, trigger)

        return () => {
            window.removeEventListener(event, trigger)
        }
    }, [event])
}
