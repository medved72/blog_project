import { type FC, memo, useCallback, useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'

export const BugButton: FC = memo(() => {
  const { t } = useTranslation()
  const [hasError, setHasError] = useState(false)

  const toggleError = useCallback(() => {
    setHasError(true)
  }, [])

  useEffect(() => {
    if (hasError) {
      throw new Error()
    }
  }, [hasError])

  return <Button onClick={toggleError}>
    {t('throw error')}
  </Button>
})
BugButton.displayName = 'BugButton'
