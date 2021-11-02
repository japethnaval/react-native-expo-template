import React, { useCallback, useEffect, useState } from 'react'

import { View } from 'react-native'
import { Button, Textfield } from '../../base/components'
import styles from './styles'

export const Login: React.FC = () => {
  const [values, setValues] = useState<{
    [key: string]: string | number
  }>()

  const handleInputChange = useCallback(
    (name: string) => (text: string) => {
      setValues((prevState) => ({
        ...prevState,
        [name]: text,
      }))
    },
    [setValues]
  )

  useEffect(() => console.log('[LOGIN VALUES]', values), [values])

  return (
    <View style={styles.base}>
      <Textfield onChangeText={handleInputChange('name')} />
      <Textfield onChangeText={handleInputChange('password')} />
      <Button text="Login" />
    </View>
  )
}

export default Login
