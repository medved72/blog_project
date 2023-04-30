import { type CSSProperties, type FC, memo, useMemo } from 'react'

import { AppImage } from '../AppImage'
import { VStack } from '../Stack'
import { classNames } from '../../lib/classNames'

import classes from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
    firstName?: string
}

export const Avatar: FC<AvatarProps> = memo((props) => {
    const { className, src, size, alt, firstName } = props

    const styles = useMemo<CSSProperties>(() => {
        return { width: size, height: size }
    }, [size])

    return (
        <AppImage
            className={classNames(classes.avatar, {}, [className])}
            src={src}
            style={styles}
            alt={alt}
            errorFallback={
                <VStack
                    className={classes.errorFallback}
                    style={styles}
                    align="center"
                    justify="center"
                >
                    {firstName?.[0].toUpperCase()}
                </VStack>
            }
        />
    )
})
Avatar.displayName = 'Avatar'
