import { observer } from 'mobx-react'
import React from 'react'

import { View, Text } from 'react-native'
import useStores from '../../../hooks/useStores'
import styles from './styles'

export const Home: React.FC = () => {
  const {
    authStore: { accessToken },
  } = useStores()

  console.log(accessToken)
  return (
    <View style={styles.base}>
      <Text>This is the home page</Text>
    </View>
  )
}

export default observer(Home)
