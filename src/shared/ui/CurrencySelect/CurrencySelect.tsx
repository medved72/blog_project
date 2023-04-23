import { type FC, memo } from 'react'
import { classNames } from '../../lib/classNames'
import { useTranslation } from 'react-i18next'
import { Currency } from '../../const/currency'
import { ListBox } from '../Popups'

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value?: Currency) => void
    readonly?: boolean
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
]

export const CurrencySelect: FC<CurrencySelectProps> = memo((props) => {
    const { className, value, onChange, readonly } = props
    const { t } = useTranslation()

    return (
        <ListBox
            className={classNames('', {}, [className])}
            label={t('Укажите валюту')}
            defaultValue={t('Укажите валюту')}
            onChange={onChange}
            items={options}
            value={value}
            readonly={readonly}
        />
    )
})
CurrencySelect.displayName = 'CurrencySelect'
