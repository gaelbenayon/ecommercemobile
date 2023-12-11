import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const ProductItem = ({product}) => {
  return (
    <View style={styles.productContainer}>
    
        <Image 
            style={styles.productImage}
            resizeMode={'cover'}
            source={{uri:product.thumbnail}}
        />
        <Text style={styles.productTitle}>{product.title}</Text>
    
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    productContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15,
        marginBottom:20,
    },
    productTitle:{
        color:colors.primary,
        textAlign:'left'
    },
    productImage:{
       width:'35%',
       height:100
    }
})