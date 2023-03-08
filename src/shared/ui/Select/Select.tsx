import { type ChangeEvent, type FC, memo, useCallback, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './Select.module.scss'

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOption[]
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Select: FC<SelectProps> = memo((props) => {
    const { className, label, value, options, onChange, readonly } = props

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLSelectElement>) => {
            onChange?.(event.currentTarget.value)
        },
        [onChange]
    )

    const optionsList = useMemo(() => {
        return options?.map((item) => {
            return (
                <option
                    key={item.value}
                    className={classes.option}
                    value={item.value}
                >
                    {item.content}
                </option>
            )
        })
    }, [options])

    return (
        <div className={classNames(classes.wrapper, {}, [className])}>
            {label && <span className={classes.label}>{label}&gt;</span>}
            <select
                className={classes.select}
                value={value}
                onChange={handleChange}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    )
})
Select.displayName = 'Select'
