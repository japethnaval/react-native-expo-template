import { RootStore } from '../interfaces/RootStore'
import { StoreData, StoreIndex } from './StoreRegistry'

class Stores {
  /**
   * Assign variables here
   */
  private storeKeys?: Array<keyof StoreData> = undefined

  public isInitialized = false

  public init(): void {
    this.storeKeys = Object.keys(StoreIndex) as Array<keyof StoreData>
    const rootStore = this as unknown as RootStore

    this.storeKeys.forEach((key) => {
      const store = new StoreIndex[key](rootStore)
      Object.assign(this, { [key]: store })
    })

    this.isInitialized = true
  }
}

const stores = new Stores()

export default stores
