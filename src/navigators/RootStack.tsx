import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../app/intents/Home'

const RootStack = createNativeStackNavigator()

export const RootStackNavigator: React.FC = () => (
  <RootStack.Navigator>
    <RootStack.Screen name="Home" component={Home} />
  </RootStack.Navigator>
)

export default RootStackNavigator
