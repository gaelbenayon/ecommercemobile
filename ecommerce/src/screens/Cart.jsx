import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { CartItem } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { usePostOrderMutation } from '../services/ordersService';
import { clearCart } from '../features/cartSlice';
import { setLocalOrders } from '../features/ordersSlice';
import { colors } from '../global/colors';

const Cart = ({ navigation }) => {

  const cartItems = useSelector(state => state.cartReducer.items);
  const total = useSelector(state => state.cartReducer.total);
  const date = useSelector(state => state.cartReducer.date);
  const user = useSelector(state => state.authReducer.user);
  const localOrders = useSelector(state => state.ordersReducer.orders);

  const dispatch = useDispatch();

  const [triggerPostOrder, result] = usePostOrderMutation();

  const onConfirmCartHandler = async () => {
    const { data: newOrderData } = await triggerPostOrder({ total, cartItems, date, user });
    const orderId = newOrderData.name;
    const updatedOrders = [...localOrders, { cartItems, total, date, user, orderId }];
    dispatch(setLocalOrders(updatedOrders));
    dispatch(clearCart());
    navigation.navigate('OrdersStack', {screen: 'orders'});
  }

  const renderCartItem = ({ item }) => {
    return (
      <CartItem itemProp={item} navigation={navigation} />
    )
  }

  return (
    <View style={styles.container}>
      {
        cartItems.length < 1 ?
          <Text>Aún no seleccionaste productos, ¡buscá lo que te gusta y agregalo!</Text> :
          <>
            <FlatList
              data={cartItems}
              renderItem={renderCartItem}
              keyExtractor={item => item.id}
            />
            <View style={styles.cartInfoContainer}>
              <Text>Total: ${total}</Text>
              <TouchableOpacity style={styles.cardButton} onPress={onConfirmCartHandler}>
                <Text style={styles.confirmButton}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </>
      }

    </View>
  )
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center'
  },
  confirmButton:{
    color: colors.primary
  }
})