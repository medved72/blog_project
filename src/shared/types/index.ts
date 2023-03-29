export type ValueOf<T> = T[keyof T]

export const SortOrder = {
    asc: 'asc',
    desc: 'desc',
} as const
export type SortOrderValues = ValueOf<typeof SortOrder>
