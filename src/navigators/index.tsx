import React, { useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AuthStackNavigator from './AuthStack'
import RootStackNavigator from './RootStack'

const Stack = createNativeStackNavigator()

export const NavigationContainerStack: React.FC = () => {
  const [loginState] = useState<boolean>(false)
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {loginState ? (
          <Stack.Screen name="RootStack" component={RootStackNavigator} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationContainerStack
