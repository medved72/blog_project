import { type FC, memo, useCallback, useEffect, useState } from 'react'

import { saveJsonSettings, useUserJsonSettings } from '@/entities/User'

import { Modal } from '@/shared/ui/Modal'
import { Text } from '@/shared/ui/Text'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'

export const ArticlePageGreeting: FC = memo(() => {
    const [isOpen, setIsOpen] = useState(false)
    const { isArticlesPageWasOpened } = useUserJsonSettings()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true)
            dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }))
        }
    }, [dispatch, isArticlesPageWasOpened])

    const handleModalClose = useCallback(() => {
        setIsOpen(false)
    }, [])

    return (
        <Modal isOpen={isOpen} onClose={handleModalClose} renderMode="lazy">
            <Text
                title={'Добро пожаловать на страницу статей'}
                text={'Здесь вы можете искать и просматривать статьи'}
            />
        </Modal>
    )
})
ArticlePageGreeting.displayName = 'ArticlePageGreeting'
