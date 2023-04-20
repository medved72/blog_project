import React, { type FC, memo, type PropsWithChildren } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Portal } from '../Portal'
import { useTheme } from 'shared/config/theme'
import { Overlay } from '../Overlay'
import {
    PopupTransitionStep,
    usePopupToggleWithTransition,
} from 'shared/hooks/usePopupToggleWithTransition'

import classes from './Modal.module.scss'
import { useWasTrue } from '../../hooks/useWasTrue'

type RenderMode = 'default' | 'lazy' | 'destroyOnclose'

export interface ModalProps {
    className?: string
    isOpen?: boolean
    onClose?: () => void
    getModalContainer?: () => HTMLElement
    renderMode?: RenderMode
}

const ANIMATION_DELAY = 300

const steps = {
    [PopupTransitionStep.Closed]: classes.closed,
    [PopupTransitionStep.CloseInProgress]: classes.closeInProgress,
    [PopupTransitionStep.Opened]: classes.opened,
    [PopupTransitionStep.OpenInProgress]: classes.openInProgress,
}

export const Modal: FC<PropsWithChildren<ModalProps>> = memo((props) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        getModalContainer,
        renderMode = 'default',
    } = props
    const { theme } = useTheme()

    const wasOpened = useWasTrue(!!isOpen)

    const step = usePopupToggleWithTransition(!!isOpen, {
        animationDelay: ANIMATION_DELAY,
    })

    if (renderMode === 'lazy' && !wasOpened) {
        return null
    }

    if (!isOpen && renderMode === 'destroyOnclose' && step === 'closed') {
        return null
    }

    return (
        <Portal element={getModalContainer?.()}>
            <div
                data-testid="modal"
                className={classNames(classes.modal, {}, [
                    className,
                    `${theme}Theme`,
                    steps[step],
                ])}
            >
                <Overlay
                    className={classes.overlay}
                    onClick={onClose}
                    data-testid="modal.overlay"
                />
                <div className={classes.content}>{children}</div>
            </div>
        </Portal>
    )
})
Modal.displayName = 'Modal'
