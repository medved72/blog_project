import React, { type FC, memo, type PropsWithChildren } from 'react'
import { classNames } from '../../lib/classNames/classNames'
import { Portal } from '../Portal'
import { useTheme } from '../../config/theme'
import { Overlay } from '../Overlay'
import { PopupTransitionStep } from '../../hooks/usePopupToggleWithTransition'
import { useModal } from '../../hooks/useModal'
import classes from './Modal.module.scss'

type RenderMode = 'default' | 'lazy' | 'destroyOnclose'

export interface ModalProps {
    className?: string
    isOpen?: boolean
    onClose?: () => void
    getModalContainer?: () => HTMLElement
    renderMode?: RenderMode
}

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

    const { step, shouldDestroy } = useModal({
        isOpen,
        onClose,
        animationDelay: 300,
        renderMode,
    })

    if (shouldDestroy) {
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
