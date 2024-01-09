import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Input } from '../components'

const SignUp = ({navigation}) => {
  return (
    <View>
      <Input 
      label="Correo"
      />
      <Input 
      label="Contraseña"
      />
      <Input 
      label="Repetir contraseña"
      />
      <TouchableOpacity onPress={()=>null}>
        <Text>Registrarme</Text>
      </TouchableOpacity>
      <View>
        <Text>¿Ya tenés una cuenta?</Text>
        <TouchableOpacity onPress={navigation.navigate('login')}>
            <Text>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUp