import { Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { setProductIdSelected, setProductSelected } from '../../features/shopSlice';
import { removeItem } from '../../features/cartSlice';

const CartItem = ({ itemProp, navigation }) => {

  const dispatch = useDispatch();

  const onSelectProductHandler = () => {
    dispatch(setProductIdSelected(itemProp.id));
    dispatch(setProductSelected());
    navigation.navigate('detail');
  }

  const onDeleteCartProductHandler = () => {
    dispatch(removeItem(itemProp.id));
  }

  return (
    <View style={styles.cart}>
      <TouchableOpacity onPress={onSelectProductHandler}>
        <Image style={styles.cartImage} source={{ uri: itemProp.thumbnail }} resizeMode='cover' />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.cartTitle}>{itemProp.title}</Text>
        <Text>{itemProp.quantity} unidades</Text>
        <Text>Total: ${itemProp.price * itemProp.quantity}</Text>
        <TouchableOpacity style={styles.cartButton} onPress={onDeleteCartProductHandler}>
          <Text style={styles.deleteButton}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartItem;