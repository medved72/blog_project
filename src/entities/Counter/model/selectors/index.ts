import { getCounterValue } from './getCounterValue'
import { getCounter } from './getCounter'

export const selectors = {
    value: getCounterValue,
    counter: getCounter,
}
