import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import { Modal } from 'shared/ui/Modal'
import { LoginForm } from './LoginForm'

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
            destroyOnClose
        >
            <LoginForm onLoginSuccess={onLoginSuccess} />
        </Modal>
    )
})
LoginModal.displayName = 'LoginModal'
