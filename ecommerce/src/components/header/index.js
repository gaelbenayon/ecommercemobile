import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

const Header = ({title,navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity onPress={navigation.goBack}>
        <Ionicons name="caret-back-sharp" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default Header