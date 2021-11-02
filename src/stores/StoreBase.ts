import { RootStore } from '../interfaces/RootStore'

abstract class StoreBase {
  // eslint-disable-next-line no-useless-constructor
  protected constructor(protected readonly store: RootStore) {}
}

export default StoreBase
