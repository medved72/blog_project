import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './Overlay.module.scss'

interface OverlayProps {
    className?: string
    onClick?: () => void
}

export const Overlay: FC<OverlayProps> = memo((props) => {
    const { className, onClick } = props
    return (
        <div
            className={classNames(classes.overlay, {}, [className])}
            onClick={onClick}
        />
    )
})
Overlay.displayName = 'Overlay'
