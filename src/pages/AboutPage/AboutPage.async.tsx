import { lazy } from 'react'

export const AboutPageAsync = lazy(async () =>
  await import('./AboutPage').then(
    async (result) =>
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      await new Promise<typeof import('./AboutPage')>((resolve) =>
        setTimeout(() => { resolve(result) }, 1500)
      )
  )
)
