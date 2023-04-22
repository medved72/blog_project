import { type FC, memo, useCallback, useState } from 'react'
import { classNames } from '@/shared/lib/classNames'
import { Card } from '@/shared/ui/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { StarRating } from '@/shared/ui/StarRating'
import { Modal } from '@/shared/ui/Modal'
import { Input } from '@/shared/ui/Input'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/Button'
import { useIsMobile } from '@/shared/hooks/useIsMobile'
import { Drawer } from '@/shared/ui/Drawer'

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard: FC<RatingCardProps> = memo((props) => {
    const { className, title, feedbackTitle, hasFeedback, onAccept, onCancel } =
        props

    const isMobile = useIsMobile()

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [starsCount, setStarsCount] = useState(0)

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
        <Card className={classNames('', {}, [className])}>
            <VStack align="center" gap="8">
                <Text title={title} />
                <StarRating size={40} onSelect={handleSelectStars} />
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
