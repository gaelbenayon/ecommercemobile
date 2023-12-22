import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import cart_data from '../data/cart_data.json'
import {CartItem} from '../components'
import { useState, useEffect } from 'react'

const Cart = () => {
  const [cartTotal, setCartTotal] = useState();

  useEffect(() => {
    const total = cart_data.reduce((accumulator, currentItem) => (accumulator += currentItem.price * currentItem.quantity), 0);
    setCartTotal(total);
  }, [])

  const renderCartItem = ({ item }) => {
    return (
      <CartItem itemProp={item} />
    )
  }
  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cart_data}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
      />
      <Text>Total: ${cartTotal}</Text>
      <TouchableOpacity style={styles.cardButton} onPress={() => null}>
        <Text style={styles.confirmButton}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Cart;

const styles = StyleSheet.create({
  cartContainer:{
    padding: 10
  }
})