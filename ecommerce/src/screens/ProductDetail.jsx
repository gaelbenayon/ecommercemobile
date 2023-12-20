import { ActivityIndicator, StyleSheet, Text, View, Image, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import products_data from '../data/products_data.json';
import { colors } from '../global/colors';

const ProductDetail = ({ route }) => {

  const [productSelected, setProductSelected] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isPortrait, setIsPortrait] = useState(true);

  const { height, width } = useWindowDimensions();

  const productIdProp = route.params;

  useEffect(() => {
    height < width ? setIsPortrait(false) : setIsPortrait(true)
  }, [height, width])

  useEffect(() => {
    const productFound = products_data.find(product => product.id === productIdProp)
    setProductSelected(productFound)
    setIsLoading(false)
  }, [productIdProp])

  return (
    <>
      {
        isLoading ? <ActivityIndicator /> :
          <View>
            <ScrollView>
              <Text style={styles.productTitle}>{productSelected.title}</Text>
              <Text style={styles.productBrand}>{productSelected.brand}</Text>
              <Image style={isPortrait ? styles.productImage : styles.productImageLandscape}
                resizeMode='cover'
                source={{ uri: productSelected.images[0] }}
              ></Image>
              <View style={styles.detailContainer}>
                <Text style={styles.productPrice}>${productSelected.price}</Text>
                <Text style={styles.productDescription}>{productSelected.description}</Text>
                <TouchableOpacity style={styles.buyButton} onPress={() => null}>
                  <Text style={styles.textButton}>Comprar</Text>
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
  productImage: {
    width: '100%',
    minWidth: 300,
    height: 400
  },
  productImageLandscape: {
    width: 200,
    height: 200,
  },
  detailContainer:{
    alignItems:'center'
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