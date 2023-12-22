import { Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Card from '../card'
import {styles} from './styles'

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