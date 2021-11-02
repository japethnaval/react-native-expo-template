import React from 'react'

import { View, Text } from 'react-native'
import styles from './styles'

export const Home: React.FC = () => {
  return (
    <View style={styles.base}>
      <Text>This is the home page</Text>
    </View>
  )
}

export default Home
