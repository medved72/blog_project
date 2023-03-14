import { type FC, memo, type PropsWithChildren } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './Code.module.scss'
import { Button } from '../Button'

interface CodeProps {
    className?: string
}

export const Code: FC<PropsWithChildren<CodeProps>> = memo((props) => {
    const { className, children } = props
    return (
        <pre className={classNames(classes.code, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button className={classes.copyButton}>Копировать</Button>
            <code>{children}</code>
        </pre>
    )
})
Code.displayName = 'Code'
