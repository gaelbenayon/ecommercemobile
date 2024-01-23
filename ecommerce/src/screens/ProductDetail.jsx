import { ActivityIndicator, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors } from '../global/colors';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from '../components/carousel';
import { addItem } from '../features/cartSlice';

const ProductDetail = () => {

  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const productId = useSelector(state=>state.shopReducer.productIdSelected);
  const productSelected = useSelector(state=>state.shopReducer.productSelected);

  useEffect(() => {
    setIsLoading(false);
  }, [productId])

  const onAddToCartHandler = () => {
    dispatch(addItem({...productSelected,quantity:1}));
  }

  return (
    <>
      {
        isLoading ? <ActivityIndicator /> :
          <View>
            <ScrollView>
              <Text style={styles.productTitle}>{productSelected.title}</Text>
              <Text style={styles.productBrand}>{productSelected.brand}</Text>
              <Carousel/>
              <View style={styles.detailContainer}>
                <Text style={styles.productPrice}>${productSelected.price}</Text>
                <Text style={styles.productDescription}>{productSelected.description}</Text>
                <TouchableOpacity style={styles.buyButton} onPress={onAddToCartHandler}>
                  <Text style={styles.textButton}>Agregar al carrito</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
      }
    </>
  )
}

export default ProductDetail;

const styles = StyleSheet.create({
  productTitle: {
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 14,
    paddingBottom: 4
  },
  productBrand: {
    textAlign: 'center',
    paddingBottom: 14,
    color: 'grey'
  },
  detailContainer:{
    alignItems:'center',
    paddingHorizontal: 5
  },
  productPrice: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary
  },
  productDescription: {
    color: 'grey',
    textAlign: 'center'
  },
  buyButton: {
    marginTop: 10,
    width: 180,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  textButton:{
    color:'#fff',
    textTransform:'uppercase'
  }
})