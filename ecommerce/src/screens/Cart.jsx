import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React from 'react';
// import cart_data from '../data/cart_data.json';
import {CartItem} from '../components';
// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { usePostOrderMutation } from '../services/shopService';

const Cart = () => {
  // const [cartTotal, setCartTotal] = useState();

  // useEffect(() => {
  //   const total = cart_data.reduce((accumulator, currentItem) => (accumulator += (currentItem.price * currentItem.quantity)), 0);
  //   setCartTotal(total);
  // }, [])

  const cartItems = useSelector(state=>state.cartReducer.items)
  const total = useSelector(state=>state.cartReducer.total)
  const [triggerPost,result] = usePostOrderMutation()

  const confirmCart = () => {
    triggerPost({total,cartItems,user:'Logged User'})
  }

  const renderCartItem = ({ item }) => {
    return (
      <CartItem itemProp={item} />
    )
  }
  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
      />
      <Text>Total: ${total}</Text>
      <TouchableOpacity style={styles.cardButton} onPress={confirmCart}>
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