import React, { Fragment, memo, type ReactNode } from 'react'
import { Listbox as HListbox } from '@headlessui/react'
import classes from './ListBox.module.scss'
import { classNames } from 'shared/lib/classNames'
import { Button } from '../../../Button'
import { capitalize } from 'shared/lib/capitalize'
import { HStack } from '../../../Stack'

export interface ListBoxItem<T extends string> {
    value: T
    content: ReactNode
    disabled?: boolean
}

type ListBoxDirection = 'top' | 'bottom'

export interface ListBoxProps<T extends string> {
    className?: string
    items: Array<ListBoxItem<T>>
    value?: T
    defaultValue?: string
    onChange?: (value: T) => void
    readonly?: boolean
    direction?: ListBoxDirection
    label?: string
}

export const ListBoxPlain = <T extends string>(props: ListBoxProps<T>) => {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom',
        label,
    } = props

    return (
        <HStack gap="8">
            {label && <span>{label + '> '}</span>}
            <HListbox
                disabled={readonly}
                className={classNames(classes.listBox, {}, [className])}
                as="div"
                value={value}
                onChange={onChange}
            >
                <HListbox.Button className={classes.trigger}>
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(classes.options, {}, [
                        classes[`direction${capitalize(direction)}`],
                    ])}
                >
                    {items.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected, disabled }) => (
                                <li
                                    className={classNames(
                                        classes.item,
                                        {
                                            [classes.active]: active,
                                            [classes.disabled]: disabled,
                                        },
                                        []
                                    )}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    )
}
ListBoxPlain.displayName = 'ListBoxPlain'

export const ListBox = memo(ListBoxPlain) as typeof ListBoxPlain
