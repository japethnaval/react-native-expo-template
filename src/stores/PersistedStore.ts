import { RootStore } from '../interfaces/RootStore'
import StoreBase from './StoreBase'

class PersistedStore extends StoreBase {
  // eslint-disable-next-line no-useless-constructor
  public constructor(rootStore: RootStore) {
    super(rootStore)
  }
}

export default PersistedStore
