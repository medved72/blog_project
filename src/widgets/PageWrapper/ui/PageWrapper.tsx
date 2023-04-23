import {
    type FC,
    type PropsWithChildren,
    type UIEvent,
    useCallback,
    useEffect,
    useRef,
} from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
    getScrollRestoreByPath,
    setScrollRestorePosition,
} from '@/features/ScrollRestore'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useThrottle } from '@/shared/hooks/useThrottle'
import classes from './PageWrapper.module.scss'

export const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const ref = useRef<HTMLDivElement>(null)
    const scrollPosition = useSelector(getScrollRestoreByPath(pathname))

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = scrollPosition
        }
    }, [scrollPosition])

    const handleScroll = useThrottle(
        useCallback(
            (e: UIEvent<HTMLDivElement>) => {
                dispatch(
                    setScrollRestorePosition({
                        path: pathname,
                        position: e.currentTarget.scrollTop,
                    })
                )
            },
            [dispatch, pathname]
        ),
        500
    )

    return (
        <main
            id="page-wrapper"
            ref={ref}
            className={classes.pageWrapper}
            onScroll={handleScroll}
        >
            {children}
        </main>
    )
}
