import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames'
import { Select } from 'shared/ui/Select'
import { useTranslation } from 'react-i18next'
import { Country } from '../../const/country'

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

    const handleChange = useCallback(
        (value: string) => {
            onChange?.(value as Country)
        },
        [onChange]
    )

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={handleChange}
            readonly={readonly}
        />
    )
})
CountrySelect.displayName = 'CurrencySelect'
