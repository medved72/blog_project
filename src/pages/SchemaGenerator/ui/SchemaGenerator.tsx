import { type FC, useCallback } from 'react'
import { faker } from '@faker-js/faker'
import { capitalize } from 'shared/lib/capitalize'
import { Button } from 'shared/ui/Button'
import { Icon } from 'shared/ui/Icon'
import CopyIcon from 'shared/assets/icons/copy-20-20.svg'

const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()

    return `${day}.${month}.${year}`
}

const blocksSchema = {
    1: () => ({
        id: faker.datatype.uuid(),
        type: 'TEXT',
        title: faker.name.jobTitle(),
        paragraphs: faker.datatype
            .array(5)
            .map(() => faker.lorem.paragraph(200)),
    }),
    2: () => ({
        id: faker.datatype.uuid(),
        type: 'CODE',
        code: faker.lorem.paragraph(2),
    }),
    3: () => ({
        id: faker.datatype.uuid(),
        type: 'IMAGE',
        src: faker.image.abstract(640, 480, true),
        title: faker.name.jobTitle(),
    }),
}

const SchemaGenerator: FC = () => {
    const schema = faker.datatype.array(100).map(() => ({
        id: faker.datatype.uuid(),
        title: faker.name.jobTitle(),
        subtitle: faker.name.jobDescriptor(),
        img: faker.image.abstract(640, 480, true),
        views: faker.datatype.number({ min: 10, max: 100 }),
        createdAt: formatDate(faker.datatype.datetime()),
        userId: faker.datatype.number({ min: 1, max: 2 }).toString(),
        type: faker.datatype
            .array(3)
            .map(() => capitalize(faker.hacker.noun())),
        blocks: faker.datatype.array(5).map(() => {
            const type = faker.datatype.number({
                min: 1,
                max: 3,
            }) as keyof typeof blocksSchema
            const generator = blocksSchema[type]
            return generator()
        }),
    }))

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
