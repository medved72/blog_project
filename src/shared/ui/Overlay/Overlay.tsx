import { type FC, memo } from 'react'

import { classNames } from '../../lib/classNames'

import classes from './Overlay.module.scss'

interface OverlayProps {
    className?: string
    onClick?: () => void
    'data-testid'?: string
}

export const Overlay: FC<OverlayProps> = memo((props) => {
    const { className, onClick, 'data-testid': dataTestId } = props
    return (
        <div
            className={classNames(classes.overlay, {}, [className])}
            onClick={onClick}
            data-testid={dataTestId}
        />
    )
})
Overlay.displayName = 'Overlay'
