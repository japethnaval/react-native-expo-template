import { AuthStoreInterface } from './AuthStoreInterface'
import { PersistedStoreInterface } from './PersistedStoreInterface'

export interface RootStore {
  init: () => Promise<void>
  isInitialized: boolean

  authStore: AuthStoreInterface
  persistedStore: PersistedStoreInterface
}
