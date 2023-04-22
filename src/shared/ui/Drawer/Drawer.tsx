import {
    type FC,
    memo,
    type PropsWithChildren,
    useCallback,
    useEffect,
} from 'react'
import { classNames } from '@/shared/lib/classNames'
import { Portal } from '../Portal'
import { useTheme } from '@/shared/config/theme'
import { Overlay } from '../Overlay'
import classes from './Drawer.module.scss'
import {
    type AnimationContextLoaded,
    AnimationProvider,
    useAnimationModules,
} from '@/shared/lib/components/AnimationProvider'

interface DrawerProps extends PropsWithChildren {
    className?: string
    opened: boolean
    onClose?: () => void
    getContainer?: () => HTMLElement
    animationModules: AnimationContextLoaded
}

const height = window.innerHeight - 100

export const DrawerContent: FC<DrawerProps> = memo((props) => {
    const {
        className,
        children,
        onClose,
        opened,
        getContainer,
        animationModules: {
            Gesture: { useDrag },
            Spring: { useSpring, config, a },
        },
    } = props

    const [{ y }, api] = useSpring(() => ({ y: height }))

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false })
    }, [api])

    const { theme } = useTheme()

    useEffect(() => {
        if (opened) {
            openDrawer()
        }
    }, [openDrawer, opened])

    const close = useCallback(
        (velocity = 0) => {
            api.start({
                y: height,
                immediate: false,
                config: { ...config.stiff, velocity },
                onResolve: onClose,
            })
        },
        [api, config.stiff, onClose]
    )

    const bind = useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) {
                cancel()
            }

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close()
                } else {
                    openDrawer()
                }
            } else {
                api.start({ y: my, immediate: false })
            }
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
        }
    )

    if (!opened) {
        return null
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'))

    return (
        <Portal element={getContainer?.()}>
            <div
                className={classNames(classes.drawer, {}, [
                    className,
                    `${theme}Theme`,
                ])}
            >
                <Overlay
                    onClick={() => {
                        close(1)
                    }}
                />
                <a.div
                    className={classes.content}
                    style={{
                        display,
                        bottom: `calc(-100vh + ${height - 100}px)`,
                        y,
                    }}
                    {...bind()}
                >
                    {children}
                </a.div>
            </div>
        </Portal>
    )
})
DrawerContent.displayName = 'DrawerContent'

const DrawerLoader: FC<Omit<DrawerProps, 'animationModules'>> = (props) => {
    const modules = useAnimationModules()

    if (!modules?.isLoaded) {
        return null
    }

    return <DrawerContent {...props} animationModules={modules} />
}

export const Drawer: FC<Omit<DrawerProps, 'animationModules'>> = (props) => {
    return (
        <AnimationProvider>
            <DrawerLoader {...props} />
        </AnimationProvider>
    )
}
