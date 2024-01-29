import { View, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import { Input } from '../components';
import { colors } from '../global/colors';
import { useDispatch } from 'react-redux';
import { useLogInMutation } from '../services/authService';
import { setUser } from '../features/authSlice';
import { insertDbSession } from '../db';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const [triggerLogIn, result] = useLogInMutation();

  const dispatch = useDispatch();

  const onSubmitLogInHandler = () => {
    if (email && password) {
      triggerLogIn({ email, password });
    } else {
      setError("Por favor, complete todos los campos")
    }
  }

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data));
      insertDbSession({
        localId: result.data.localId,
        email: result.data.email,
        token: result.data.idToken
      })
      .catch(error => console.log("Error al insertar sesión en la DB: ",error.message))
    }
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
      {error && <Text style={styles.errorText}>{error}</Text>}
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
  },
  errorText: {
    color: 'red',
    paddingTop: 20
  }
})