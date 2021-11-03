import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedbackProps } from 'react-native'
import styles from './styles'

type IVariant = 'danger' | 'success' | 'warning' | 'default'

interface IProps extends TouchableWithoutFeedbackProps {
  text: string
  variant?: IVariant
}

export const Button: React.FC<IProps> = ({ text, variant = 'default', ...props }) => {
  return (
    <TouchableOpacity {...props} style={StyleSheet.flatten([styles.base, styles[variant]])}>
      <Text style={styles.text}> {text} </Text>
    </TouchableOpacity>
  )
}

export default Button
