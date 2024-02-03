import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Input } from '../components';
import { colors } from '../global/colors';
import {useSignUpMutation} from '../services/authService';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/authSlice';
import { insertDbSession } from '../db';

const SignUp = ({navigation}) => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState("");

  const [triggerSignUp,result] = useSignUpMutation();

  const dispatch = useDispatch();

  const onSubmitRegisterHandler = () => {
    if (email, password, confirmPassword) {
      triggerSignUp({ email, password });
    } else {
      setError("Completá todos los campos antes de continuar");
    }
  }

  useEffect(()=>{
    if (result.data) {
      dispatch(setUser(result.data));
      insertDbSession({
        localId: result.data.localId,
        email: result.data.email,
        token: result.data.idToken
      })
      .catch(error => console.log("Error al insertar sesión en la DB: ",error.message));
    }
  },[result])
  
  return (
    <KeyboardAvoidingView style={styles.signUpContainer}>
      <Input 
      label="Correo"
      onChange={setEmail}
      />
      <Input 
      label="Contraseña"
      onChange={setPassword}
      isSecureEntry={true}
      />
      <Input 
      label="Repetir contraseña"
      onChange={setConfirmPassword}
      isSecureEntry={true}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity onPress={onSubmitRegisterHandler}>
        <Text style={styles.registerSubmit}>Registrarme</Text>
      </TouchableOpacity>
      <View style={styles.loginOptionContainer}>
        <Text>¿Ya tenés una cuenta?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('login')}>
            <Text style={styles.loginText}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignUp;

const styles = StyleSheet.create({
  signUpContainer:{
    alignItems:'center',
    paddingVertical:10
  },
  registerSubmit:{
    paddingTop:20,
    color:colors.primary,
  },
  loginOptionContainer:{
    paddingVertical: 30
  },
  loginText:{
    textAlign:'center',
    color:colors.primary
  },
  errorText: {
    color: 'red',
    paddingTop: 20
  }
})