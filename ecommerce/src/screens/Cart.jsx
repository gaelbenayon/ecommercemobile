import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import {CartItem} from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { usePostOrderMutation } from '../services/shopService';
import { clearCart } from '../features/cartSlice';

const Cart = ({navigation}) => {

  const cartItems = useSelector(state=>state.cartReducer.items);
  const total = useSelector(state=>state.cartReducer.total);
  const date = useSelector(state=>state.cartReducer.date);

  const dispatch = useDispatch();
  
  const [triggerPost,result] = usePostOrderMutation();
  const confirmCart = () => {
    triggerPost({total,cartItems,date,user:'LoggedUser'})
    dispatch(clearCart())
    navigation.navigate('orders')
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