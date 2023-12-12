import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './styles';

const ProductItem = ({product,onSelectProductIdEvent}) => {
  return (
    <TouchableOpacity style={styles.productContainer} onPress={()=>onSelectProductIdEvent(product.id)}>
    
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