import { AuthStoreInterface } from './AuthStoreInterface'
import { PersistedStoreInterface } from './PersistedStoreInterface'

export interface RootStore {
  authStore: AuthStoreInterface
  persistedStore: PersistedStoreInterface
}
