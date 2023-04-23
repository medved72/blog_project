import { type FC, memo, useCallback, useRef } from 'react'
import { classNames } from '../../lib/classNames'
import classes from './Code.module.scss'
import { Button } from '../Button'
import { Icon } from '../Icon'
import CopyIcon from '../../assets/icons/copy-20-20.svg'

interface CodeProps {
    className?: string
    children: string
}

export const Code: FC<CodeProps> = memo((props) => {
    const { className, children } = props
    const codeRef = useRef<HTMLElement>(null)

    const handleCopy = useCallback(() => {
        navigator?.clipboard.writeText(children).catch(console.error)
    }, [children])

    return (
        <pre className={classNames(classes.code, {}, [className])}>
            <Button
                className={classes.copyButton}
                theme="clear"
                onClick={handleCopy}
            >
                <Icon Svg={CopyIcon} stroke />
            </Button>
            <code ref={codeRef}>{children}</code>
        </pre>
    )
})
Code.displayName = 'Code'
