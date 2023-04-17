import React, { Fragment, memo, type ReactNode } from 'react'
import { Listbox as HListbox } from '@headlessui/react'
import classes from './ListBox.module.scss'
import { classNames } from '../../../../lib/classNames'
import {
    useFloating,
    flip,
    offset,
    type Placement,
} from '@floating-ui/react-dom'
import { Button } from '../../../Button'
import { HStack } from '../../../Stack'

export interface ListBoxItem<T extends string> {
    value: T
    content: ReactNode
    disabled?: boolean
}

export interface ListBoxProps<T extends string> {
    className?: string
    items: Array<ListBoxItem<T>>
    value?: T
    defaultValue?: string
    onChange?: (value: T) => void
    readonly?: boolean
    label?: string
    direction?: Placement
}

export const ListBoxPlain = <T extends string>(props: ListBoxProps<T>) => {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom-start',
        label,
    } = props

    const { x, y, strategy, refs } = useFloating({
        placement: direction,
        middleware: [offset(10), flip()],
    })

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
                    <Button ref={refs.setReference} disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options
                    ref={refs.setFloating}
                    className={classNames(classes.options, {}, [
                        // classes[`direction${capitalize(direction)}`],
                    ])}
                    style={{
                        position: strategy,
                        top: y ?? 0,
                        left: x ?? 0,
                        width: 'max-content',
                    }}
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
