import { type FC, useCallback, useMemo } from 'react'
import { Button } from 'shared/ui/Button'
import { Icon } from 'shared/ui/Icon'
import CopyIcon from 'shared/assets/icons/copy-20-20.svg'
import { generateDb } from '../lib/generateDb'

const SchemaGenerator: FC = () => {
    const schema = useMemo(() => generateDb(), [])

    const handleCopy = useCallback(() => {
        navigator?.clipboard
            .writeText(JSON.stringify(schema, null, 2))
            .catch(console.error)
    }, [schema])

    return (
        <>
            <Button theme="clear" onClick={handleCopy}>
                <Icon Svg={CopyIcon} stroke />
            </Button>
            <pre>{JSON.stringify(schema, null, 2)}</pre>
        </>
    )
}

export default SchemaGenerator
