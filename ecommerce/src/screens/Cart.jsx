import { View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';
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
  const userId = useSelector(state => state.authReducer.localId);
  const localOrders = useSelector(state => state.ordersReducer.orders);

  const dispatch = useDispatch();

  const [triggerPostOrder, result] = usePostOrderMutation();

  const onConfirmCartHandler = async () => {
    const { data: newOrderData } = await triggerPostOrder({ total, cartItems, date: Date.now(), userId });
    const orderId = newOrderData.name;
    const updatedOrders = [...localOrders, { cartItems, total, date: Date.now(), userId, orderId }];
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
    <SafeAreaView style={styles.container}>
      {
        cartItems.length < 1 ?
          <Text style={styles.nullCartText}>Aún no seleccionaste productos, ¡buscá lo que te gusta y agregalo!</Text> :
          <>
            <FlatList
              data={cartItems}
              renderItem={renderCartItem}
              keyExtractor={item => item.id}
            />
            <View style={styles.cartInfoContainer}>
              <Text style={styles.total}>TOTAL: ${total.toFixed(2)}</Text>
              <TouchableOpacity style={styles.cardButton} onPress={onConfirmCartHandler}>
                <Text style={styles.confirmButton}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </>
      }
    </SafeAreaView>
  )
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  nullCartText:{
    padding:10
  },
  total:{
    fontWeight:'bold',
    fontSize: 24
  },
  confirmButton:{
    color: colors.primary,
    fontSize: 20
  },
  cartInfoContainer: {
    padding:10
  }
})