import React from 'react'
import { SOME_AWESOME_KEY } from '@env'
import NavigationContainerStack from './src/navigators'
import stores from './src/stores'

const App = () => {
  stores.init()

  console.log(SOME_AWESOME_KEY, process.env.NODE_ENV)
  return (
    <>
      <NavigationContainerStack />
    </>
  )
}

export default App
