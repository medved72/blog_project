import { type SortOrderValues, SortOrder } from '@/shared/types'

export const isSortOrder = (value: unknown): value is SortOrderValues => {
    const items = Object.values(SortOrder)
    return typeof value === 'string' && !!items.find((item) => item === value)
}
