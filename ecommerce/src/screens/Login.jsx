import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Input } from '../components'

const Login = () => {
  return (
    <View>
      <Input 
      label="Correo"
      />
      <Input 
      label="Contraseña"
      />
      <TouchableOpacity onPress={()=>null}>
        <Text>Iniciar sesión</Text>
      </TouchableOpacity>
      <View>
        <Text>¿No tenés una cuenta?</Text>
        <TouchableOpacity onPress={()=>null}>
            <Text>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login