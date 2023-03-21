import { useMemo, useState } from 'react'

interface UseHoverBind {
    onMouseEnter: () => void
    onMouseLeave: () => void
}

type UseHoverResult = [boolean, UseHoverBind]

export const useHover = (): UseHoverResult => {
    const [isHover, setIsHover] = useState(false)

    const hoverBind = useMemo(
        (): UseHoverBind => ({
            onMouseEnter: () => {
                setIsHover(true)
            },
            onMouseLeave: () => {
                setIsHover(false)
            },
        }),
        []
    )

    return useMemo(() => [isHover, hoverBind], [hoverBind, isHover])
}
