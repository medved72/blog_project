import { type FC, memo, type ReactElement } from 'react'

import { getFeatureFlag } from './featureFlags'
import { type FeatureFlags } from '../../api/types'

interface ToggleFeatureProps {
    name: keyof FeatureFlags
    on: ReactElement
    off: ReactElement
}

export const ToggleFeature: FC<ToggleFeatureProps> = memo((props) => {
    const { name, on, off } = props

    if (getFeatureFlag(name)) {
        return on
    }

    return off
})
ToggleFeature.displayName = 'ToggleFeature'
