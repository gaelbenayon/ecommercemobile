import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Card from '../card'

const CartItem = ({ itemProp }) => {
  return (
    <Card style={styles.cart}>
      <Image style={styles.cartImage} source={{ uri: itemProp.thumbnail }} resizeMode='cover' />
      <View>
        <Text style={styles.cartTitle}>{itemProp.title}</Text>
        <Text>{itemProp.quantity} unidades</Text>
        <Text>Total: ${itemProp.price * itemProp.quantity}</Text>
        <TouchableOpacity style={styles.cartButton} onPress={() => null}>
          <Text>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </Card>
  )
}

export default CartItem

const styles = StyleSheet.create({
  cart: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom:15
  },
  cartImage: {
    height: 50,
    width: 50,
    marginRight:20
  },
  cartTitle: {

  },
  cartButton: {

  }
})