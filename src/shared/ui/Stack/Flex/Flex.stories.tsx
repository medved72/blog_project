import {
    Flex,
    type FlexAlign,
    type FlexDirection,
    type FlexGap,
    type FlexJustify,
} from './Flex'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'
import { capitalize } from '../../../lib/capitalize'

const gaps: FlexGap[] = ['4', '8', '16', '32']
const directions: FlexDirection[] = ['row', 'column']
const justifies: FlexJustify[] = ['center', 'between']
const aligns: FlexAlign[] = ['center']

generateAppStories(
    'shared/Stack/Flex',
    Flex,
    gaps.flatMap((gap) => {
        return directions.flatMap((direction) => {
            return justifies.flatMap((justify) => {
                return aligns.flatMap((align) => ({
                    key: `direction${capitalize(direction)}Justify${capitalize(
                        justify
                    )}Align${capitalize(align)}Gap${gap}`,
                    args: {
                        align,
                        justify,
                        direction,
                        gap,
                        children: (
                            <>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                            </>
                        ),
                    },
                }))
            })
        })
    })
)
