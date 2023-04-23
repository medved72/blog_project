import { type ChangeEvent, memo, useCallback, useMemo } from 'react'
import { classNames } from '../../lib/classNames'
import classes from './Select.module.scss'

export interface SelectOption<V extends string = string> {
    value: V
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options?: Array<SelectOption<T>>
    value?: T
    onChange?: (value: T) => void
    readonly?: boolean
}

const SelectPlain = <T extends string>(props: SelectProps<T>) => {
    const { className, label, value, options, onChange, readonly } = props

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLSelectElement>) => {
            onChange?.(event.currentTarget.value as T)
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
}
SelectPlain.displayName = 'Select'

export const Select = memo(SelectPlain) as typeof SelectPlain
