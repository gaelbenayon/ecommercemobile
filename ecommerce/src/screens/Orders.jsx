import { ActivityIndicator, FlatList, StyleSheet, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { OrderItem } from '../components';
import { useGetOrdersByUserQuery } from '../services/ordersService';
import { useDispatch, useSelector } from 'react-redux';
import { setLocalOrders } from '../features/ordersSlice';

const Orders = ({ navigation }) => {

  const [orders, setOrders] = useState([]);

  const dispatch = useDispatch();

  const user = useSelector(state => state.authReducer.user);
  const userId = useSelector(state => state.authReducer.localId);
  const localOrders = useSelector(state => state.ordersReducer.orders);

  const { data: ordersData, isLoading, error } = useGetOrdersByUserQuery(userId);

  useEffect(() => {
    if (!isLoading && ordersData) {
      const ordersValues = Object.values(ordersData);
      const ordersKeys = Object.keys(ordersData);
      const ordersWithId = ordersValues.map((order, index) => {
        return ({ ...order, orderId: ordersKeys[index] })
      })
      setOrders(ordersWithId);
      dispatch(setLocalOrders(ordersWithId));
    }
  }, [isLoading, ordersData, user, userId])

  useEffect(() => {
    if (localOrders !== orders) {
      setOrders(localOrders);
    }
  }, [localOrders])

  const renderOrderItem = ({ item }) => (<OrderItem orderProp={item} navigation={navigation} />);

  return (
    <View style={styles.ordersContainer}>
      {error && <Text>Error al obtener las órdenes</Text>}
      {
        isLoading ? <ActivityIndicator /> :
          orders.length < 1 ?
            <Text>No hay órdenes realizadas</Text> :
            <FlatList
              data={orders}
              renderItem={renderOrderItem}
              keyExtractor={item => item.orderId}
            />
      }
    </View>
  )
}

export default Orders;

const styles = StyleSheet.create({
  noOrdersText: {
    padding: 10
  },
  ordersContainer: {
    padding: 10
  }
})