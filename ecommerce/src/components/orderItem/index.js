import { FlatList, Image,  Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'

const OrderItem = ({ orderProp, totalProp, navigation }) => {
    
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
                <Text>Total: ${totalProp}</Text>
                <Text>Realizada el {new Date(orderProp.createdAt).toLocaleDateString()}</Text>
            </View>

            <FlatList
                data={orderProp.items}
                renderItem={renderOrderProducts}
                key={item => item.id}
            />
        </View>
    )
}

export default OrderItem