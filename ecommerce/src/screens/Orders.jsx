import { ActivityIndicator, FlatList, StyleSheet, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { OrderItem } from '../components';
import { useGetOrdersQuery } from '../services/shopService';

const Orders = ({ navigation }) => {

  const [orders, setOrders] = useState([]);

  const { data: ordersData, isLoading, error } = useGetOrdersQuery();

  useEffect(() => {
    if (!isLoading && ordersData) {
      const ordersValues = Object.values(ordersData)
      setOrders(ordersValues)
    }
  }, [isLoading,ordersData])

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
                keyExtractor={item => item.id}
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