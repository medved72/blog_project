import { useStore } from 'react-redux'

export const useAppStore = (): AppStore => useStore() as AppStore
