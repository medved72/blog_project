import { useStore } from 'react-redux'

export const useAppStore = (): GlbAppStore => useStore() as GlbAppStore
