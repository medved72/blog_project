import { lazy } from 'react'

export const SchemaGenerator = lazy(
    async () => await import('./SchemaGenerator')
)
