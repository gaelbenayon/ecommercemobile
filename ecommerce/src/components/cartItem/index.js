import { Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { setProductIdSelected, setProductSelected } from '../../features/shopSlice';
import { addItem, removeItem } from '../../features/cartSlice';
import { Feather, Ionicons } from '@expo/vector-icons';

const CartItem = ({ itemProp, navigation }) => {

  const dispatch = useDispatch();

  const onSelectProductHandler = () => {
    dispatch(setProductIdSelected(itemProp.id));
    dispatch(setProductSelected());
    navigation.navigate('detail');
  }

  const onDeleteCartProductHandler = () => {dispatch(removeItem(itemProp.id))};

  const onAddQuantityHandler = () => {dispatch(addItem({ ...itemProp, quantity: 1 }))};

  const itemPrice = itemProp.price * itemProp.quantity;

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={onSelectProductHandler}>
          <Image style={styles.cartImage} source={{ uri: itemProp.thumbnail }} resizeMode='cover' />
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <View style={styles.textInfo}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.title}>{itemProp.title}</Text>
            </View>
            <Text>{itemProp.artist}</Text>
            <Text style={styles.format}>{itemProp.format}</Text>
          </View>

          <View style={styles.quantityContainer}>
            <Text>{itemProp.quantity} unidades</Text>
            <TouchableOpacity onPress={onAddQuantityHandler}>
              <Ionicons name="add-sharp" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.columnContainer}>
        <TouchableOpacity style={styles.cartButton} onPress={onDeleteCartProductHandler}>
          <Feather name="trash" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.price}>${itemPrice.toFixed(2)}</Text>
      </View>
    </View>
  )
}

export default CartItem;