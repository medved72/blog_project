import { type FC, memo, type PropsWithChildren, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './Drawer.module.scss'
import { Portal } from '../Portal'
import { useTransitionGroup } from './useTransitionGroup'
import { useTheme } from '../../config/theme'
import { Overlay } from '../Overlay'

interface DrawerProps extends PropsWithChildren {
    className?: string
    opened: boolean
    onClose?: () => void
}

const steps = {
    closed: classes.closed,
    closeInProgress: classes.closeInProgress,
    opened: classes.opened,
    openInProgress: classes.openInProgress,
}

export const Drawer: FC<DrawerProps> = memo((props) => {
    const { className, children, onClose, opened } = props

    const { theme } = useTheme()

    const [step, toggle] = useTransitionGroup(
        [
            { name: steps.closed, delay: 200 },
            [
                { name: steps.openInProgress, delay: 200 },
                { name: steps.closeInProgress, delay: 200 },
            ],
            { name: steps.opened, delay: 200 },
        ],
        {
            startFromEnd: opened,
        }
    )

    useEffect(() => {
        const closeSteps = [steps.closed, steps.closeInProgress]
        const openSteps = [steps.opened, steps.openInProgress]

        if (opened && closeSteps.includes(step)) {
            toggle()
        }

        if (!opened && openSteps.includes(step)) {
            toggle()
        }
    }, [opened, step, toggle])

    return (
        <div>
            <Portal>
                <div
                    className={classNames(classes.drawer, {}, [
                        className,
                        step,
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
