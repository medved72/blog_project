import { lazy } from 'react'

export const MainPageAsync = lazy(async () =>
  await import('./MainPage').then(
    async (result) =>
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      await new Promise<typeof import('./MainPage')>((resolve) =>
        setTimeout(() => { resolve(result) }, 1500)
      )
  )
)
