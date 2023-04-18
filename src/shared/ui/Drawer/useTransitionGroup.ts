import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

interface SimpleTransitionGroupItem {
    name: string
    delay: number
}

type DirectionTransitionGroupItem = [
    SimpleTransitionGroupItem,
    SimpleTransitionGroupItem
]

type TransitionGroupItem =
    | SimpleTransitionGroupItem
    | DirectionTransitionGroupItem

interface UseTransitionGroupConfig {
    startFromEnd: boolean
}

enum Direction {
    TO_END,
    TO_START,
}

export function useTransitionGroup(
    steps: TransitionGroupItem[],
    config: UseTransitionGroupConfig | void
) {
    const [stepIndex, setStepIndex] = useState(
        config?.startFromEnd ? steps.length - 1 : 0
    )

    const [direction, setDirection] = useState(
        config?.startFromEnd ? Direction.TO_END : Direction.TO_START
    )

    const stepsRef = useRef(steps)

    const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

    stepsRef.current = steps

    const resolveStep = useCallback(
        (
            transitionGroupItem: TransitionGroupItem,
            direction: Direction
        ): SimpleTransitionGroupItem => {
            return Array.isArray(transitionGroupItem)
                ? transitionGroupItem[direction === Direction.TO_END ? 0 : 1]
                : transitionGroupItem
        },
        []
    )

    useEffect(() => {
        if (
            direction === Direction.TO_END &&
            stepIndex === stepsRef.current.length - 1
        ) {
            console.log({
                returnToEnd: true,
                stepIndex,
                step: resolveStep(stepsRef.current[stepIndex], direction),
                direction,
                steps: stepsRef.current,
            })
            return
        }

        if (direction === Direction.TO_START && stepIndex === 0) {
            console.log({
                returnToStart: true,
                stepIndex,
                step: resolveStep(stepsRef.current[stepIndex], direction),
                direction,
                steps: stepsRef.current,
            })
            return
        }

        const step = resolveStep(stepsRef.current[stepIndex], direction)

        if (direction === Direction.TO_END) {
            console.log({
                toEnd: true,
                stepIndex,
                step: resolveStep(stepsRef.current[stepIndex], direction),
                direction,
                steps: stepsRef.current,
            })
            timeoutRef.current = setTimeout(() => {
                setStepIndex((prev) => prev + 1)
            }, step.delay)
        }

        if (direction === Direction.TO_START) {
            console.log({
                toEnd: true,
                stepIndex,
                step: resolveStep(stepsRef.current[stepIndex], direction),
                direction,
                steps: stepsRef.current,
            })
            timeoutRef.current = setTimeout(() => {
                setStepIndex((prev) => prev - 1)
            }, step.delay)
        }

        return () => {
            clearTimeout(timeoutRef.current)
        }
    }, [direction, resolveStep, stepIndex])

    const toggle = useCallback(() => {
        setDirection((prevState) => {
            const isToEnd = prevState === Direction.TO_END

            setStepIndex((prevStepIndex) => {
                return isToEnd ? prevStepIndex - 1 : prevStepIndex + 1
            })

            return isToEnd ? Direction.TO_START : Direction.TO_END
        })
    }, [])

    const stepName = useMemo(() => {
        const step = resolveStep(stepsRef.current[stepIndex], direction)
        return step.name
    }, [direction, resolveStep, stepIndex])

    return [stepName, toggle] as const
}
