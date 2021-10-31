import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

/**
 * Environment variables were store at @env
 * Example:
 * import { AWESOME_KEY } from '@env'
    console.log(AWESOME_KEY)
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'asd',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to staasdasrt working on your app!</Text>
    </View>
  )
}
