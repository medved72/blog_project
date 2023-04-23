import { type FC, memo } from 'react'
import { classNames } from '../../lib/classNames'
import { useTranslation } from 'react-i18next'
import { Country } from '../../const/country'
import { ListBox } from '../Popups'

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value?: Country) => void
    readonly?: boolean
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
]

export const CountrySelect: FC<CountrySelectProps> = memo((props) => {
    const { className, value, onChange, readonly } = props
    const { t } = useTranslation()

    return (
        <ListBox
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            defaultValue={t('Укажите страну')}
            items={options}
            value={value}
            onChange={onChange}
            readonly={readonly}
        />
    )
})
CountrySelect.displayName = 'CurrencySelect'
