import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { setProductIdSelected, setProductSelected } from '../../features/shopSlice';

const ProductItem = ({product,navigation}) => {
  const dispatch = useDispatch()
  return (
    <TouchableOpacity style={styles.productContainer} onPress={()=>{
      dispatch(setProductIdSelected(product.id))
      dispatch(setProductSelected())
      navigation.navigate('detail',product.id)
      }}>
    
        <Image 
            style={styles.productImage}
            resizeMode={'cover'}
            source={{uri:product.thumbnail}}
        />
        <Text style={styles.productTitle}>{product.title}</Text>
    
    </TouchableOpacity>
  )
}

export default ProductItem;