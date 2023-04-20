import { type FC, memo, type PropsWithChildren } from 'react'
import { classNames } from 'shared/lib/classNames'
import { Portal } from '../Portal'
import { useTheme } from 'shared/config/theme'
import { Overlay } from '../Overlay'
import { PopupTransitionStep } from 'shared/hooks/usePopupToggleWithTransition'
import classes from './Drawer.module.scss'
import { type RenderMode, useModal } from 'shared/hooks/useModal'

interface DrawerProps extends PropsWithChildren {
    className?: string
    opened: boolean
    onClose?: () => void
    renderMode?: RenderMode
}

const steps = {
    [PopupTransitionStep.Closed]: classes.closed,
    [PopupTransitionStep.CloseInProgress]: classes.closeInProgress,
    [PopupTransitionStep.Opened]: classes.opened,
    [PopupTransitionStep.OpenInProgress]: classes.openInProgress,
}

export const Drawer: FC<DrawerProps> = memo((props) => {
    const { className, children, onClose, opened, renderMode } = props

    const { theme } = useTheme()

    const { step, shouldDestroy } = useModal({
        isOpen: opened,
        onClose,
        animationDelay: 200,
        renderMode,
    })

    if (shouldDestroy) {
        return null
    }

    return (
        <Portal>
            <div
                className={classNames(classes.drawer, {}, [
                    className,
                    steps[step],
                    `${theme}Theme`,
                ])}
            >
                <Overlay onClick={onClose} />
                <div className={classes.content}>{children}</div>
            </div>
        </Portal>
    )
})
Drawer.displayName = 'Drawer'
