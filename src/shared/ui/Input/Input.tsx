import React, {
    type FC,
    type FocusEventHandler,
    type InputHTMLAttributes,
    memo,
    type SyntheticEvent,
    useCallback,
    useState,
    type FocusEvent,
} from 'react'
import { classNames } from '@/shared/lib/classNames'
import classes from './Input.module.scss'
import { computeTextWidth } from '@/shared/lib/computeTextWidth'

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>

interface InputProps extends HTMLInputProps {
    value?: string | number
    onChange?: (value: string) => void
    inputClassName?: string
    readonly?: boolean
    'data-testid'?: string
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        className,
        value,
        onChange,
        inputClassName: inputClassNameFromProps,
        placeholder,
        onFocus,
        onBlur,
        onSelect,
        autoFocus,
        readonly,
        'data-testid': dataTestId = 'Input',
        ...restProps
    } = props

    const [isFocused, setIsFocused] = useState(autoFocus)
    const [left, setLeft] = useState(0)
    const isCaretVisible = !readonly && isFocused

    const updateCaretLeft = useCallback(
        (e: SyntheticEvent<HTMLInputElement>) => {
            const { value, selectionStart } = e.currentTarget
            const styles = getComputedStyle(e.currentTarget)
            const left = computeTextWidth(
                value?.toString().slice(0, selectionStart ?? 0) ?? '',
                {
                    size: Number(styles.fontSize.replace('px', '')),
                    name: styles.fontFamily,
                }
            )
            setLeft(left)
        },
        []
    )

    const handleChangeValue = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value)
            updateCaretLeft(e)
        },
        [onChange, updateCaretLeft]
    )

    const handleBlur: FocusEventHandler<HTMLInputElement> = useCallback(
        (e: FocusEvent<HTMLInputElement>) => {
            setIsFocused(false)
            onBlur?.(e)
        },
        [onBlur]
    )

    const handleFocus = useCallback(
        (e: FocusEvent<HTMLInputElement>) => {
            setIsFocused(true)
            onFocus?.(e)
        },
        [onFocus]
    )

    const handleSelect = useCallback(
        (event: SyntheticEvent<HTMLInputElement>) => {
            onSelect?.(event)
            updateCaretLeft(event)
        },
        [onSelect, updateCaretLeft]
    )

    const inputClassName = classNames(
        classes.input,
        { [classes.readonly]: readonly },
        [inputClassNameFromProps]
    )

    return (
        <div className={classNames(classes.wrapper, {}, [className])}>
            {placeholder && (
                <div
                    className={classes.placeholder}
                    data-testid={`${dataTestId}.placeholder`}
                >
                    {placeholder}
                </div>
            )}

            <div className={classes.caretWrapper}>
                <input
                    {...restProps}
                    data-testid={`${dataTestId}.input`}
                    className={inputClassName}
                    autoFocus={autoFocus}
                    value={value}
                    onChange={handleChangeValue}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onSelect={handleSelect}
                    readOnly={readonly}
                />

                {isCaretVisible && (
                    <span className={classes.caret} style={{ left }} />
                )}
            </div>
        </div>
    )
})
Input.displayName = 'Input'
