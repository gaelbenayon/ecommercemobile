import { Text, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { setProductIdSelected, setProductSelected } from '../../features/shopSlice';

const ProductItem = ({ product, navigation }) => {
  const dispatch = useDispatch();

  const onSelectProductHandler = () => {
    dispatch(setProductIdSelected(product.id));
    dispatch(setProductSelected());
    navigation.navigate('detail');
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onSelectProductHandler}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.productImage}
          resizeMode={'cover'}
          source={{ uri: product.thumbnail }}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.artist}>{product.artist}</Text>
        <Text style={styles.format}>{product.format}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ProductItem;