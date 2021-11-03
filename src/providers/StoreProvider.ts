import React from 'react'
import { RootStore } from '../interfaces/RootStore'

import stores from '../stores'

const StoreContext = React.createContext<RootStore>(stores as unknown as RootStore)

export default StoreContext
