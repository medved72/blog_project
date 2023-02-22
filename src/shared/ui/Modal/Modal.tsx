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
import { classNames } from 'shared/lib/classNames'

import classes from './Modal.module.scss'
import { Portal } from 'shared/ui/Portal'
import { useTheme } from 'shared/config/theme'

export interface ModalProps {
    className?: string
    isOpen?: boolean
    onClose?: () => void
    getModalContainer?: () => HTMLElement
    lazy?: boolean
    destroyOnClose?: boolean
}

const ANIMATION_DELAY = 300

export const Modal: FC<PropsWithChildren<ModalProps>> = memo((props) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        getModalContainer,
        lazy,
        destroyOnClose,
    } = props
    const [isWasMounted, setIsWasMounted] = useState(false)

    const [isOpenInProgress, setIsOpenInProgress] = useState(true)

    const [isClosing, setIsClosing] = useState(false)

    const closeTimerRef = useRef<ReturnType<typeof setTimeout>>()

    const { theme } = useTheme()

    useEffect(() => {
        if (isOpen) {
            setIsWasMounted(true)
        }
    }, [isOpen])

    useEffect(() => {
        if (isOpen && isWasMounted) {
            setIsOpenInProgress(false)
        }
    }, [isOpen, isWasMounted])

    const handleClose = useCallback(() => {
        if (!onClose) return
        setIsClosing(true)
        closeTimerRef.current = setTimeout(() => {
            onClose()
            setIsOpenInProgress(true)
            setIsClosing(false)
        }, ANIMATION_DELAY)
    }, [onClose])

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
        if (isOpen) {
            window.addEventListener('keydown', handleGlobalKeyDown)
        }

        return () => {
            clearTimeout(closeTimerRef.current)
            window.removeEventListener('keydown', handleGlobalKeyDown)
        }
    }, [handleGlobalKeyDown, isOpen])

    const rootClassname = useMemo(() => {
        const opened = !isOpenInProgress && isOpen
        return classNames(
            classes.modal,
            {
                [classes.opened]: opened,
                [classes.isClosing]: isClosing,
            },
            [className, `${theme}Theme`]
        )
    }, [className, isClosing, isOpen, isOpenInProgress, theme])

    if (destroyOnClose && !isOpen) {
        return null
    }

    if (lazy && !isWasMounted) {
        return null
    }

    return (
        <Portal element={getModalContainer?.()}>
            <div className={rootClassname}>
                <div className={classes.overlay} onClick={handleClose}>
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
