import { ActivityIndicator, FlatList, StyleSheet, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { OrderItem } from '../components';
import { useGetOrdersQuery } from '../services/ordersService';
import { useDispatch, useSelector } from 'react-redux';
import { setLocalOrders } from '../features/ordersSlice';

const Orders = ({ navigation }) => {

  const [orders, setOrders] = useState([]);

  const dispatch = useDispatch();

  const localOrders = useSelector(state=>state.ordersReducer.orders)

  const { data: ordersData, isLoading, error } = useGetOrdersQuery();

  useEffect(() => {
    if (!isLoading && ordersData) {
      const ordersValues = Object.values(ordersData)
      const ordersKeys = Object.keys(ordersData)
      const ordersWithId = ordersValues.map((order,index) => {
        return ({...order,orderId: ordersKeys[index]})
      })
      setOrders(ordersWithId)
      dispatch(setLocalOrders(ordersWithId))
    }
  }, [isLoading, ordersData])

  useEffect(()=>{
    setOrders(localOrders)
  },[localOrders])

  const renderOrderItem = ({ item }) => {
    return (
      <OrderItem orderProp={item} navigation={navigation}/>
    )
  }

  return (
    <>
      {
        isLoading ?
          <ActivityIndicator /> :
          error ?
          <Text>Error al obtener las órdenes</Text> :
          orders.length < 1 ?
          <Text>No hay órdenes realizadas</Text> :
          <>
            <View style={styles.ordersContainer}>
              <FlatList
                data={orders}
                renderItem={renderOrderItem}
                keyExtractor={item => item.orderId}
              />
            </View>
          </>
      }
    </>
  )
}

export default Orders;

const styles = StyleSheet.create({
  ordersContainer: {
    padding: 10
  }
})