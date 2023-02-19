import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import classes from './NotFound.module.scss'

export interface NotFoundProps {
  className?: string
}

export const NotFound: FC<NotFoundProps> = memo(({ className }) => {
  const { t } = useTranslation()
  return <div className={classNames(classes.notFound, {}, [className])}>
    {t('pageNotFound')}
  </div>
})
NotFound.displayName = 'NotFound'