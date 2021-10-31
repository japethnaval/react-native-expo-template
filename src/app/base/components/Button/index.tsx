import React from 'react'
import { Text } from 'react-native'

interface IProps {
  text: string
}

export const Button: React.FC<IProps> = ({ text }) => {
  return <Text> {text} </Text>
}

export default Button
