import { type FC, memo, type PropsWithChildren } from 'react'
import { classNames } from 'shared/lib/classNames'
import { Portal } from '../Portal'
import { useTheme } from 'shared/config/theme'
import { Overlay } from '../Overlay'
import {
    PopupTransitionStep,
    usePopupToggleWithTransition,
} from 'shared/hooks/usePopupToggleWithTransition'
import classes from './Drawer.module.scss'

interface DrawerProps extends PropsWithChildren {
    className?: string
    opened: boolean
    onClose?: () => void
}

const steps = {
    [PopupTransitionStep.Closed]: classes.closed,
    [PopupTransitionStep.CloseInProgress]: classes.closeInProgress,
    [PopupTransitionStep.Opened]: classes.opened,
    [PopupTransitionStep.OpenInProgress]: classes.openInProgress,
}

export const Drawer: FC<DrawerProps> = memo((props) => {
    const { className, children, onClose, opened } = props

    const { theme } = useTheme()

    const step = usePopupToggleWithTransition(opened, { animationDelay: 200 })

    return (
        <div>
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
        </div>
    )
})
Drawer.displayName = 'Drawer'
