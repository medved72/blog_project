import { useEffect } from 'react'

import { useTransitionGroup } from './useTransitionGroup'

export enum PopupTransitionStep {
    Closed = 'closed',
    OpenInProgress = 'openInProgress',
    CloseInProgress = 'closeInProgress',
    Opened = 'opened',
}

interface UseModalParams {
    animationDelay: number
    startFromEnd?: boolean
}

export const usePopupToggleWithTransition = (
    isOpen: boolean,
    { animationDelay, startFromEnd }: UseModalParams
) => {
    const [step, toggle] = useTransitionGroup(
        [
            { name: PopupTransitionStep.Closed, delay: animationDelay },
            [
                {
                    name: PopupTransitionStep.OpenInProgress,
                    delay: animationDelay,
                },
                {
                    name: PopupTransitionStep.CloseInProgress,
                    delay: animationDelay,
                },
            ],
            { name: PopupTransitionStep.Opened, delay: animationDelay },
        ],
        {
            startFromEnd: !!startFromEnd,
        }
    )

    useEffect(() => {
        const closeSteps = [
            PopupTransitionStep.Closed,
            PopupTransitionStep.CloseInProgress,
        ]
        const openSteps = [
            PopupTransitionStep.Opened,
            PopupTransitionStep.OpenInProgress,
        ]
        if (!isModalStep(step)) {
            return
        }

        if (isOpen && closeSteps.includes(step)) {
            toggle()
        }

        if (!isOpen && openSteps.includes(step)) {
            toggle()
        }
    }, [isOpen, step, toggle])

    return step as PopupTransitionStep
}

function isModalStep(value: unknown): value is PopupTransitionStep {
    return Object.values(PopupTransitionStep).includes(
        value as PopupTransitionStep
    )
}
