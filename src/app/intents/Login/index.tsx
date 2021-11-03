import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import get from 'lodash/get'
import { observer } from 'mobx-react'
import useStores from '../../../hooks/useStores'
import { Button, Textfield } from '../../base/components'

import styles from './styles'

export const Login: React.FC = () => {
  const {
    authStore: { login },
  } = useStores()

  const [values, setValues] = useState<{
    [key: string]: string
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

  const handleLogin = useCallback(
    // eslint-disable-next-line no-return-await
    async () => await login(get(values, 'username'), get(values, 'password')),
    [login, values]
  )

  return (
    <View style={styles.base}>
      <Textfield onChangeText={handleInputChange('username')} />
      <Textfield secureTextEntry onChangeText={handleInputChange('password')} />
      <Button text="Login" onPress={handleLogin} />
    </View>
  )
}

export default observer(Login)
