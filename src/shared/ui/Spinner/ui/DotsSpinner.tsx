import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import classes from './DotsSpinner.module.scss'

export interface DotsSpinnerProps {
    className?: string
}

export const DotsSpinner: FC<DotsSpinnerProps> = memo(({ className }) => {
    return (
        <div
            className={classNames(classes.ldsEllipsis, {}, [className])}
            data-testid="DotsSpinner"
        >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
})
DotsSpinner.displayName = 'DotsSpinner'
