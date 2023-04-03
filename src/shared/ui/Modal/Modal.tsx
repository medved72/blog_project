import React, {
    type FC,
    memo,
    type PropsWithChildren,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Portal } from '../Portal'
import { useTheme } from 'shared/config/theme'

import classes from './Modal.module.scss'

type RenderMode = 'default' | 'lazy' | 'destroyOnclose'

export interface ModalProps {
    className?: string
    isOpen?: boolean
    onClose?: () => void
    getModalContainer?: () => HTMLElement
    renderMode?: RenderMode
}

const ANIMATION_DELAY = 300

type ModalStatus =
    | 'idle'
    | 'closed'
    | 'opened'
    | 'open-in-progress'
    | 'close-in-progress'

export const Modal: FC<PropsWithChildren<ModalProps>> = memo((props) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        getModalContainer,
        renderMode = 'default',
    } = props
    const [status, setStatus] = useState<ModalStatus>('idle')

    const openTimerRef = useRef<ReturnType<typeof setTimeout>>()
    const closeTimerRef = useRef<ReturnType<typeof setTimeout>>()

    const { theme } = useTheme()

    const handleOpen = useCallback(() => {
        setStatus('open-in-progress')
        openTimerRef.current = setTimeout(() => {
            setStatus('opened')
        })
    }, [])

    const handleClose = useCallback(() => {
        setStatus('close-in-progress')
        closeTimerRef.current = setTimeout(() => {
            setStatus('closed')
            onClose?.()
        }, ANIMATION_DELAY)
    }, [onClose])

    useEffect(() => {
        if (isOpen) {
            handleOpen()
        }
    }, [handleOpen, isOpen])

    useEffect(() => {
        if (
            !isOpen &&
            status !== 'idle' &&
            status !== 'close-in-progress' &&
            status !== 'closed'
        ) {
            handleClose()
        }
    }, [handleClose, isOpen, status])

    const handleGlobalKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose()
            }
        },
        [handleClose]
    )

    const handleContentClick = useCallback((e: React.MouseEvent) => {
        e.stopPropagation()
    }, [])

    useEffect(() => {
        if (status === 'opened') {
            window.addEventListener('keydown', handleGlobalKeyDown)
        }

        return () => {
            window.removeEventListener('keydown', handleGlobalKeyDown)
        }
    }, [handleGlobalKeyDown, status])

    useEffect(() => {
        return () => {
            clearTimeout(openTimerRef.current)
            clearTimeout(closeTimerRef.current)
        }
    }, [])

    const rootClassname = useMemo(() => {
        const opened = status === 'opened' || status === 'close-in-progress'
        return classNames(
            classes.modal,
            {
                [classes.opened]: opened,
                [classes.isClosing]: status === 'close-in-progress',
            },
            [className, `${theme}Theme`]
        )
    }, [className, status, theme])

    if (
        renderMode === 'destroyOnclose' &&
        (status === 'closed' || status === 'idle')
    ) {
        return null
    }

    if (renderMode === 'lazy' && status === 'idle') {
        return null
    }

    return (
        <Portal element={getModalContainer?.()}>
            <div data-testid="modal" className={rootClassname}>
                <div
                    data-testid="modal.overlay"
                    className={classes.overlay}
                    onClick={handleClose}
                >
                    <div
                        className={classes.content}
                        onClick={handleContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
})
Modal.displayName = 'Modal'
