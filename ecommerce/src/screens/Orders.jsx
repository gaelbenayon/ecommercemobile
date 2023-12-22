import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import {useSelector} from 'react-redux'
import {OrderItem} from '../components'
import orders_data from '../data/orders_data.json'

const Orders = ({navigation}) => {

    const renderOrderItem = ({item}) => {
        const total = item.items.reduce((accumulator, currentItem) => (
            accumulator += currentItem.price*currentItem.quantity
          ),0)
        return (
        <OrderItem orderProp={item} totalProp={total} navigation={navigation}/>)
    }
    
  return (
    <View style={styles.ordersContainer}>
      <FlatList
        data={orders_data}
        renderItem={renderOrderItem}
        keyExtractor={item=>item.id}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
    ordersContainer:{
        padding:10
    }
})