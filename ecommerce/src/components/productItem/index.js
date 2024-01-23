import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { setProductIdSelected, setProductSelected } from '../../features/shopSlice';

const ProductItem = ({product,navigation}) => {
  const dispatch = useDispatch();

  const onSelectProductHandler = () => {
    dispatch(setProductIdSelected(product.id));
    dispatch(setProductSelected());
    navigation.navigate('detail');
  }

  return (
    <TouchableOpacity style={styles.productContainer} onPress={onSelectProductHandler}>
        <Image 
            style={styles.productImage}
            resizeMode={'cover'}
            source={{uri:product.thumbnail}}
        />
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text>${product.price}</Text>
        <Text>{product.format}</Text>
    </TouchableOpacity>
  )
}

export default ProductItem;