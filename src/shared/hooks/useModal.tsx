import { usePopupToggleWithTransition } from './usePopupToggleWithTransition'
import { useEventHandler } from './useEventHandler'
import { useWasTrue } from './useWasTrue'

export type RenderMode = 'default' | 'lazy' | 'destroyOnclose'

export interface UseModalParams {
    onClose?: () => void
    isOpen?: boolean
    animationDelay: number
    renderMode?: RenderMode
}

export const useModal = ({
    onClose,
    animationDelay,
    isOpen,
    renderMode,
}: UseModalParams) => {
    const wasOpened = useWasTrue(!!isOpen)

    const step = usePopupToggleWithTransition(!!isOpen, {
        animationDelay,
    })

    useEventHandler('keydown', (e) => {
        if (isOpen && e.key === 'Escape') {
            onClose?.()
        }
    })

    const shouldLazyDestroy = renderMode === 'lazy' && !wasOpened

    const shouldDestroyOnClose =
        !isOpen && renderMode === 'destroyOnclose' && step === 'closed'

    const shouldDestroy = shouldLazyDestroy || shouldDestroyOnClose

    return { step, shouldDestroy }
}
