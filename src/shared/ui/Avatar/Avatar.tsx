import { type CSSProperties, type FC, memo, useMemo } from 'react'

import { classNames } from '../../lib/classNames'

import classes from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
}

export const Avatar: FC<AvatarProps> = memo((props) => {
    const { className, src, size, alt } = props

    const styles = useMemo<CSSProperties>(() => {
        return { width: size, height: size }
    }, [size])

    return (
        <img
            className={classNames(classes.avatar, {}, [className])}
            src={src}
            style={styles}
            alt={alt}
        />
    )
})
Avatar.displayName = 'Avatar'
