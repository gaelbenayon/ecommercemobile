import { ActivityIndicator, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors } from '../global/colors';
import { useSelector, useDispatch } from 'react-redux';
import { Carousel, Card } from '../components';
import { addItem } from '../features/cartSlice';

const ProductDetail = ({navigation}) => {

  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const productId = useSelector(state => state.shopReducer.productIdSelected);
  const productSelected = useSelector(state => state.shopReducer.productSelected);

  useEffect(() => {
    setIsLoading(false);
  }, [productId])

  const onAddToCartHandler = () => {
    dispatch(addItem({ ...productSelected, quantity: 1 }));
    navigation.navigate('CartStack',{screen:'cart'});
  }

  return (
    <>
      {
        isLoading ? <ActivityIndicator /> :
          <View style={styles.container}>
            <ScrollView>
              <View style={styles.header}>
                <Text style={styles.title}>{productSelected.title}</Text>
                <Text style={styles.artist}>{productSelected.artist}</Text>
              </View>
              <Carousel />
              <View style={styles.detailContainer}>
                <View style={styles.cardContainer}>
                  <Card style={styles.card}>
                    <Text>Formato: {productSelected.format}</Text>
                  </Card>
                  <Card style={styles.card}>
                    <Text style={{ textTransform: 'capitalize' }}>Género: {productSelected.genre}</Text>
                  </Card>
                  <Card style={styles.card}>
                    <Text style={{ textTransform: 'capitalize' }}>Duración: {productSelected.duration}</Text>
                  </Card>
                </View>
              </View>
            </ScrollView>

            <View style={styles.footer}>
              <Text style={styles.price}>${productSelected.price.toFixed(2)}</Text>
              <TouchableOpacity style={styles.buyButton} onPress={onAddToCartHandler}>
                <Text style={styles.textButton}>Agregar al carrito</Text>
              </TouchableOpacity>
            </View>
          </View>
      }
    </>
  )
}

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1
  },
  header: {
    paddingBottom: 10,
    paddingHorizontal:8
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center'
  },
  artist: {
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
    opacity: 0.6
  },
  detailContainer: {
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  cardContainer: {
    width: '90%',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  card: {
    backgroundColor: "#e6e6ea",
    padding: 10,
    marginVertical: 10,
    borderRadius: 4,
    width: '100%'
  },
  footer: {
    alignItems: 'center'
  },
  price: {
    padding: 6,
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary
  },
  buyButton: {
    width: 180,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  textButton: {
    color: '#fff',
    textTransform: 'uppercase'
  }
})