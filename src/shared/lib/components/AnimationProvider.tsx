import {
    createContext,
    type PropsWithChildren,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type SpringType = typeof import('@react-spring/web')
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type GestureType = typeof import('@use-gesture/react')

export interface AnimationContextNotLoaded {
    isLoaded: false
}

export interface AnimationContextLoaded {
    Gesture: GestureType
    Spring: SpringType
    isLoaded: true
}

export type AnimationContextValue =
    | AnimationContextNotLoaded
    | AnimationContextLoaded

const AnimationContext = createContext<AnimationContextValue | undefined>(
    undefined
)

const loadAnimationModules = async () => {
    return await Promise.all([
        import('@react-spring/web'),
        import('@use-gesture/react'),
    ])
}

export const useAnimationModules = () => {
    return useContext(AnimationContext)
}

export const AnimationProvider = (props: PropsWithChildren) => {
    const { children } = props

    const [isLoaded, setIsLoaded] = useState(false)

    const gestureRef = useRef<GestureType>()

    const springRef = useRef<SpringType>()

    useEffect(() => {
        loadAnimationModules().then(([Spring, Gesture]) => {
            springRef.current = Spring
            gestureRef.current = Gesture
            setIsLoaded(true)
        })
    }, [])

    const value = useMemo((): AnimationContextValue => {
        const Gesture = gestureRef.current
        const Spring = springRef.current

        if (!isLoaded) {
            return { isLoaded: false }
        }

        if (!Gesture || !Spring) {
            throw new Error('Gesture or Spring not loaded')
        }

        return {
            Gesture,
            Spring,
            isLoaded,
        }
    }, [isLoaded])

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    )
}
