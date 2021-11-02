import React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import styles from './styles'

export const Textfield: React.FC<TextInputProps> = ({ ...props }) => <TextInput style={styles.base} {...props} />

export default Textfield
