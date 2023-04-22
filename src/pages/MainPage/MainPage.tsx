import { type FC, memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Drawer } from '@/shared/ui/Drawer'
import { Button } from '@/shared/ui/Button'

const MainPage: FC = memo(() => {
    const { t } = useTranslation()
    const [opened, setOpened] = useState(false)

    return (
        <div>
            <Button
                onClick={() => {
                    setOpened((prev) => !prev)
                }}
            >
                {t('Главная страница')}
            </Button>
            <Drawer
                opened={opened}
                onClose={() => {
                    setOpened((prev) => !prev)
                }}
            />
        </div>
    )
})

MainPage.displayName = 'MainPage'

export default MainPage
