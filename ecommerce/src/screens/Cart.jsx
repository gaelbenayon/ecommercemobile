import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import {CartItem} from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { usePostOrderMutation } from '../services/ordersService';
import { clearCart } from '../features/cartSlice';
import { setLocalOrders } from '../features/ordersSlice';

const Cart = ({navigation}) => {

  const cartItems = useSelector(state=>state.cartReducer.items);
  const total = useSelector(state=>state.cartReducer.total);
  const date = useSelector(state=>state.cartReducer.date);
  const user = useSelector(state=>state.authReducer.user);

  const localOrders = useSelector(state=>state.ordersReducer.orders);

  const dispatch = useDispatch();
  
  const [triggerPost,result] = usePostOrderMutation();
  const confirmCart = async() => {
    const {data:newOrderData} = await triggerPost({total,cartItems,date,user})
    const orderId = newOrderData.name
    const updatedOrders = [...localOrders,{cartItems,total,date,user,orderId}]
    dispatch(setLocalOrders(updatedOrders))
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
      {
        cartItems.length < 1?
        <Text>Aún no seleccionaste productos, ¡buscá lo que te gusta y agregalo!</Text> :
        <>
        <Text>Total: ${total}</Text>
        <TouchableOpacity style={styles.cardButton} onPress={confirmCart}>
        <Text style={styles.confirmButton}>Confirmar</Text>
        </TouchableOpacity>
      </>
      }
      
    </View>
  )
}

export default Cart;

const styles = StyleSheet.create({
  cartContainer:{
    padding: 10
  }
})