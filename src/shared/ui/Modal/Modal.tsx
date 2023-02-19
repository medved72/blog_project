import React, { type FC, memo, type PropsWithChildren, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames'

import classes from './Modal.module.scss'
import { Portal } from 'shared/ui/Portal'
import { useTheme } from 'shared/config/theme'

export interface ModalProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
  getModalContainer?: () => HTMLElement
}

const ANIMATION_DELAY = 300

export const Modal: FC<PropsWithChildren<ModalProps>> = memo((props) => {
  const { className, children, isOpen, onClose, getModalContainer } = props
  const timerRef = useRef<ReturnType<typeof setTimeout>>()
  const [isClosing, setIsClosing] = useState(false)
  const { theme } = useTheme()

  const handleClose = useCallback(() => {
    if (!onClose) return
    setIsClosing(true)
    timerRef.current = setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, ANIMATION_DELAY)
  }, [onClose])

  const handleGlobalKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose()
    }
  }, [handleClose])

  const handleContentClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
  }, [])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleGlobalKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', handleGlobalKeyDown)
    }
  }, [handleGlobalKeyDown, isOpen])

  const rootClassname = useMemo(() => {
    return classNames(classes.modal, {
      [classes.opened]: isOpen,
      [classes.isClosing]: isClosing
    }, [className, `${theme}Theme`])
  }, [className, isClosing, isOpen, theme])

  return <Portal element={getModalContainer?.()}>
    <div className={rootClassname}>
      <div className={classes.overlay} onClick={handleClose}>
        <div className={classes.content} onClick={handleContentClick}>
          {children}
        </div>
      </div>
    </div>
  </Portal>
})
Modal.displayName = 'Modal'
