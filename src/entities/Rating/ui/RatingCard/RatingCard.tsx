import { type FC, memo, useCallback, useState } from 'react'

import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Drawer } from '@/shared/ui/Drawer'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Input } from '@/shared/ui/Input'
import { Modal } from '@/shared/ui/Modal'
import { StarRating } from '@/shared/ui/StarRating'
import { Text } from '@/shared/ui/Text'
import { useIsMobile } from '@/shared/hooks/useIsMobile'

interface RatingCardProps {
    className?: string
    title?: string
    ratedTitle?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
    rate?: number
}

export const RatingCard: FC<RatingCardProps> = memo((props) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onAccept,
        onCancel,
        rate,
        ratedTitle,
    } = props

    const isMobile = useIsMobile()

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [starsCount, setStarsCount] = useState(rate ?? 0)

    const [feedback, setFeedback] = useState('')

    const { t } = useTranslation()

    const handleSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount)
            if (hasFeedback) {
                setIsModalOpen(true)
                return
            }

            onAccept?.(selectedStarsCount)
        },
        [hasFeedback, onAccept]
    )

    const handleModalAccept = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount, feedback)
    }, [feedback, onAccept, starsCount])

    const handleModalCancel = useCallback(() => {
        setIsModalOpen(false)
        onCancel?.(starsCount)
    }, [onCancel, starsCount])

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                value={feedback}
                onChange={setFeedback}
                placeholder={`${t('rating.feedback.input.placeholder')}>`}
                autoFocus
            />
        </>
    )

    return (
        <Card className={className} fullWidth>
            <VStack align="center" gap="8">
                <Text title={starsCount ? ratedTitle : title} />
                <StarRating
                    size={40}
                    onSelect={handleSelectStars}
                    selectedStars={starsCount}
                />
            </VStack>
            {!isMobile && (
                <Modal
                    isOpen={isModalOpen}
                    renderMode="destroyOnclose"
                    onClose={handleModalCancel}
                >
                    <VStack gap="32" fullWidth>
                        {modalContent}
                        <HStack gap="16" justify="end" fullWidth>
                            <Button
                                theme="outlineRed"
                                onClick={handleModalCancel}
                            >
                                {t('rating.feedback.button.cancel')}
                            </Button>
                            <Button onClick={handleModalAccept}>
                                {t('rating.feedback.button.accept')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            )}
            {isMobile && (
                <Drawer opened={isModalOpen} onClose={handleModalCancel}>
                    <VStack gap="32" fullWidth>
                        {modalContent}
                        <HStack gap="16" justify="end" fullWidth>
                            <Button
                                onClick={handleModalAccept}
                                size="xl"
                                fullWidth
                            >
                                {t('rating.feedback.button.accept')}
                            </Button>
                        </HStack>
                    </VStack>
                </Drawer>
            )}
        </Card>
    )
})
RatingCard.displayName = 'RatingCard'
