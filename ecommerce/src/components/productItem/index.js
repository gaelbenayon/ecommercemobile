import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './styles';

const ProductItem = ({product,navigation}) => {
  return (
    <TouchableOpacity style={styles.productContainer} onPress={()=>navigation.navigate('detail',product.id)}>
    
        <Image 
            style={styles.productImage}
            resizeMode={'cover'}
            source={{uri:product.thumbnail}}
        />
        <Text style={styles.productTitle}>{product.title}</Text>
    
    </TouchableOpacity>
  )
}

export default ProductItem