import React from 'react'

import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { observer } from 'mobx-react'

import AuthStackNavigator from './AuthStack'
import RootStackNavigator from './RootStack'
import useStores from '../hooks/useStores'

const Stack = createNativeStackNavigator()

export const NavigationContainerStack: React.FC = () => {
  const {
    authStore: { isAuthenticated },
  } = useStores()

  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isAuthenticated ? (
          <Stack.Screen name="RootStack" component={RootStackNavigator} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default observer(NavigationContainerStack)
