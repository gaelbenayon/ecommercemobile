import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Card = ({children,style}) => {
  return (
    <View style={{...styles.cardContainer,...style}}>
      {children}
    </View>
  )
}

export default Card;

const styles = StyleSheet.create({
    cardContainer:{ 
        shadowColor: "#BDBDBD",
        shadowOffset:{
          height: 3,
          width: 2,
        },
        elevation: 5,
        shadowOpacity:1,
        shadowRadius: 1,
    },
})