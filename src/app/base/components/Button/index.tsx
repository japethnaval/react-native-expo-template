import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

interface IProps {
  text: string
}

export const Button: React.FC<IProps> = ({ text }) => {
  return (
    <TouchableOpacity>
      <Text> {text} </Text>
    </TouchableOpacity>
  )
}

export default Button
