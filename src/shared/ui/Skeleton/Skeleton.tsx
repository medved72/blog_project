import { type CSSProperties, type FC, memo } from 'react'
import { classNames } from '@/shared/lib/classNames'
import classes from './Skeleton.module.scss'

interface SkeletonProps {
    className?: string
    height?: CSSProperties['height']
    width?: CSSProperties['width']
    borderRadius?: CSSProperties['borderRadius']
}

export const Skeleton: FC<SkeletonProps> = memo((props) => {
    const { className, height, width, borderRadius } = props
    return (
        <div
            className={classNames(classes.skeleton, {}, [className])}
            style={{
                height,
                width,
                borderRadius,
            }}
        ></div>
    )
})
Skeleton.displayName = 'Skeleton'
