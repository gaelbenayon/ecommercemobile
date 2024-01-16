import { View, StyleSheet } from 'react-native';
import React from 'react';

const Separator = () => {
  return (
    <View style={styles.separator}>
    </View>
  )
}

export default Separator

export const styles = StyleSheet.create({
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#ddd'
    }
})