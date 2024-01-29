import { FlatList, Image, Modal, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import Separator from '../separator';
import { useDispatch } from 'react-redux';
import { setProductIdSelected, setProductSelected } from '../../features/shopSlice';
import { AntDesign,Entypo } from '@expo/vector-icons';

const OrderItem = ({ orderProp, navigation }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const dispatch = useDispatch();

    const onSelectProductHandler = (itemIdProp) => {
        dispatch(setProductIdSelected(itemIdProp));
        dispatch(setProductSelected());
        setIsModalVisible(false);
        navigation.navigate('ShopStack', { screen: 'detail' });
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
                    <Text>{item.quantity} x ${item.price.toFixed(2)}</Text>
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
                <TouchableOpacity style={styles.orderDetailContainer} onPress={() => setIsModalVisible(true)}>
                    <Text>Ver detalle del pedido</Text>
                    <Entypo style={styles.searchIcon} name="magnifying-glass" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <Modal visible={isModalVisible} animationType='slide'>
                <SafeAreaView style={styles.modalContainer}>
                    <FlatList
                        data={orderProp.cartItems}
                        renderItem={renderOrderProducts}
                        key={item => item.id}
                    />
                    <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                        <AntDesign name="close" size={24} color="black" />
                    </TouchableOpacity>
                </SafeAreaView>
            </Modal>
            <Separator />
        </View>
    )
}

export default OrderItem;