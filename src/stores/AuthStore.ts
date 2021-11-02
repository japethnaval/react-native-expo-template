/* eslint-disable no-useless-constructor */
import { RootStore } from '../interfaces/RootStore'
import StoreBase from './StoreBase'

class AuthStore extends StoreBase {
  public constructor(rootStore: RootStore) {
    super(rootStore)
  }
}

export default AuthStore
