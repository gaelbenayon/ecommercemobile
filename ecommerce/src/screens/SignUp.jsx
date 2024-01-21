import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Input } from '../components';
import { colors } from '../global/colors';
import {useSignUpMutation} from '../services/authService';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/authSlice';

const SignUp = ({navigation}) => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState("");

  const [triggerSignUp,result] = useSignUpMutation();

  const onSubmitRegisterHandler = () => {
    if (email, password, confirmPassword) {
      triggerSignUp({ email, password });
    } else {
      setError("Completá todos los campos antes de continuar");
    }
  }

  const dispatch = useDispatch();

  useEffect(()=>{
    result.data && dispatch(setUser(result.data));
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