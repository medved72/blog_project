import React, {
    type FC,
    type FocusEventHandler,
    type InputHTMLAttributes,
    memo,
    type ReactEventHandler,
    useCallback,
    useState,
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Input.module.scss'

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
        ...restProps
    } = props

    const [isFocused, setIsFocused] = useState(autoFocus)
    const [caretPosition, setCaretPosition] = useState(0)
    const isCaretVisible = !readonly && isFocused

    const handleChangeValue = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value)
            setCaretPosition(e.target.value.length)
        },
        [onChange]
    )

    const handleBlur: FocusEventHandler<HTMLInputElement> = useCallback(
        (e) => {
            setIsFocused(false)
            onBlur?.(e)
        },
        [onBlur]
    )

    const handleFocus: FocusEventHandler<HTMLInputElement> = useCallback(
        (e) => {
            setIsFocused(true)
            onFocus?.(e)
        },
        [onFocus]
    )

    const handleSelect: ReactEventHandler<HTMLInputElement> = useCallback(
        (event) => {
            onSelect?.(event)
            setCaretPosition(event?.currentTarget?.selectionStart ?? 0)
        },
        [onSelect]
    )

    const inputClassName = classNames(
        classes.input,
        { [classes.readonly]: readonly },
        [inputClassNameFromProps]
    )

    return (
        <div
            className={classNames(classes.wrapper, {}, [className])}
            data-testid={restProps['data-testid']}
        >
            {placeholder && (
                <div className={classes.placeholder} data-testid="placeholder">
                    {placeholder}
                </div>
            )}

            <div className={classes.caretWrapper}>
                <input
                    {...restProps}
                    data-testid="input"
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
                    <span
                        className={classes.caret}
                        style={{ left: caretPosition * 9 }}
                    />
                )}
            </div>
        </div>
    )
})
Input.displayName = 'Input'
