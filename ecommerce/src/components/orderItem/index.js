import { FlatList, Image,  Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'

const OrderItem = ({ orderProp, navigation }) => {
    
    const renderOrderProducts = ({ item }) => (
        <View>
            <TouchableOpacity style={styles.orderContainer} onPress={null}>
                <Image
                    style={styles.orderImage}
                    source={{ uri: item.thumbnail }}
                />
                <View>
                    <Text>{item.title}</Text>
                    <Text>{item.quantity} x ${item.price}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
    
    return (
        <View style={styles.ordersContainer}>
            <View style={styles.orderInfo}>
                <Text>Órden: #{orderProp.id}</Text>
                <Text>Total: ${orderProp.total}</Text>
                <Text>Realizada el {Date(orderProp.date).toLocaleString()}</Text>
            </View>

            <FlatList
                data={orderProp.cartItems}
                renderItem={renderOrderProducts}
                key={item => item.id}
            />
        </View>
    )
}

export default OrderItem