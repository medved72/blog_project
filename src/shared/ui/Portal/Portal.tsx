import { type FC, memo, type PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  element?: HTMLElement
}

export const Portal: FC<PropsWithChildren<PortalProps>> = memo((props) => {
  const { children, element = document.body } = props
  return createPortal(children, element)
})
Portal.displayName = 'Portal'
