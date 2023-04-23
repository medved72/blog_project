import { type FC, memo, Suspense } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Modal } from '@/shared/ui/Modal'
import { DotsSpinner } from '@/shared/ui/Spinner'
import { LoginFormAsync as LoginForm } from './LoginForm.async'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
    onLoginSuccess: () => void
    getModalContainer?: () => HTMLElement
}
export const LoginModal: FC<LoginModalProps> = memo((props) => {
    const { className, isOpen, onClose, onLoginSuccess, getModalContainer } =
        props

    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            getModalContainer={getModalContainer}
            renderMode="destroyOnclose"
        >
            <Suspense fallback={<DotsSpinner />}>
                <LoginForm onLoginSuccess={onLoginSuccess} />
            </Suspense>
        </Modal>
    )
})
LoginModal.displayName = 'LoginModal'
