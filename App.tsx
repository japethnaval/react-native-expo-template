import React from 'react'
import NavigationContainerStack from './src/navigators'
import stores from './src/stores'

const App = () => {
  stores.init()

  return (
    <>
      <NavigationContainerStack />
    </>
  )
}

export default App
