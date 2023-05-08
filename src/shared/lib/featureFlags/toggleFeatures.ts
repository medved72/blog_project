import { getFeatureFlag } from './featureFlags'
import { type FeatureFlags } from '../../api/types'

interface ToggleFeaturesParams<T> {
    name: keyof FeatureFlags
    on: () => T
    off: () => T
}

export function toggleFeatures<T>(params: ToggleFeaturesParams<T>) {
    const { name, off, on } = params

    if (getFeatureFlag(name)) {
        return on()
    }

    return off()
}
