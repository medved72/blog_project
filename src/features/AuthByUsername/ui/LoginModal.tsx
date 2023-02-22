import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import { Modal } from 'shared/ui/Modal'
import { LoginForm } from './LoginForm'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}
export const LoginModal: FC<LoginModalProps> = memo((props) => {
    const { className, isOpen, onClose } = props

    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            remountOnClose
        >
            <LoginForm />
        </Modal>
    )
})
LoginModal.displayName = 'LoginModal'
