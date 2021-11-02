import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../app/intents/Login'

const AuthStack = createNativeStackNavigator()

export const AuthStackNavigator: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={Login} />
  </AuthStack.Navigator>
)

export default AuthStackNavigator
