import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

type IVariant = 'danger' | 'success' | 'warning' | 'default'

interface IProps {
  text: string
  variant?: IVariant
}

export const Button: React.FC<IProps> = ({ text, variant = 'default' }) => {
  return (
    <TouchableOpacity style={StyleSheet.flatten([styles.base, styles[variant]])}>
      <Text style={styles.text}> {text} </Text>
    </TouchableOpacity>
  )
}

export default Button
