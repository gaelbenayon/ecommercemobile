import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Input = ({label, isSecureEntry = false, }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
      
      />
    </View>
  )
}

export default Input