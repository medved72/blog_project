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
    'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
    value?: string
    onChange?: (value: string) => void
    inputClassName?: string
    'data-testid'?: string
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        className,
        value,
        onChange,
        inputClassName,
        placeholder,
        onFocus,
        onBlur,
        onSelect,
        autoFocus,
        ...restProps
    } = props

    const [isFocused, setIsFocused] = useState(autoFocus)
    const [caretPosition, setCaretPosition] = useState(0)

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
                    className={classNames(classes.input, {}, [inputClassName])}
                    autoFocus={autoFocus}
                    value={value}
                    onChange={handleChangeValue}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onSelect={handleSelect}
                />

                {isFocused && (
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
