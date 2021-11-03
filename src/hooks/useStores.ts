import React from 'react'
import { RootStore } from '../interfaces/RootStore'
import StoreContext from '../providers/StoreProvider'

const useStores = (): RootStore => React.useContext(StoreContext)

export default useStores
