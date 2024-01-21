import { View, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import { Input } from '../components';
import { colors } from '../global/colors';
import { useDispatch } from 'react-redux';
import { useLogInMutation } from '../services/authService';
import { setUser } from '../features/authSlice';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [triggerLogIn, result] = useLogInMutation();

  const dispatch = useDispatch();

  const onSubmitLogInHandler = () => {
    triggerLogIn({ email, password });
  }

  useEffect(() => {
    result.data && dispatch(setUser(result.data));
  }, [result])

  return (
    <KeyboardAvoidingView style={styles.logInContainer}>
      <Input
        label="Correo"
        onChange={setEmail}
      />
      <Input
        label="Contraseña"
        onChange={setPassword}
        isSecureEntry={true}
      />
      <TouchableOpacity onPress={onSubmitLogInHandler}>
        <Text style={styles.logInSubmit}>Iniciar sesión</Text>
      </TouchableOpacity>
      <View style={styles.signUpOptionContainer}>
        <Text>¿No tenés una cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <Text style={styles.signUpText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login;

const styles = StyleSheet.create({
  logInContainer: {
    alignItems: 'center',
    paddingVertical: 10
  },
  logInSubmit: {
    paddingTop: 20,
    color: colors.primary,
  },
  signUpOptionContainer: {
    paddingVertical: 30
  },
  signUpText: {
    textAlign: 'center',
    color: colors.primary
  }
})