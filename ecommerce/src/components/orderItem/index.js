import { FlatList, Image,  Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Separator from '../separator';
import { useDispatch } from 'react-redux';
import { setProductIdSelected, setProductSelected } from '../../features/shopSlice';

const OrderItem = ({ orderProp, navigation }) => {

    const dispatch = useDispatch();

    const onSelectProductHandler = (itemIdProp) => {
        dispatch(setProductIdSelected(itemIdProp));
        dispatch(setProductSelected());
        navigation.navigate('ShopStack', {screen: 'detail'});
      }
    
    const renderOrderProducts = ({ item }) => (
        <View>
            <TouchableOpacity style={styles.orderContainer} onPress={() => onSelectProductHandler(item.id)}>
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
                <Text>Orden: {orderProp.orderId}</Text>
                <Text>Realizada el {new Date(orderProp.date).toLocaleDateString()} a las {new Date(orderProp.date).toLocaleTimeString()}</Text>
                <Text>Total: ${orderProp.total.toFixed(2)}</Text>
            </View>

            <FlatList
                data={orderProp.cartItems}
                renderItem={renderOrderProducts}
                key={item => item.id}
            />
            <Separator/>
        </View>
    )
}

export default OrderItem;