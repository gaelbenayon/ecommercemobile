import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';

const Input = ({label, isSecureEntry = false, error="", onChange}) => {
  const [input, setInput] = useState();

  const onChangeTextHandler = (text) => {
    setInput(text);
    onChange(text);
}

  return (
    <View>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput style={styles.textInput}
        onChangeText={onChangeTextHandler}
        secureTextEntry={isSecureEntry}
        value={input}
      />
      {error && <Text>{error}</Text>}
    </View>
  )
}

export default Input;