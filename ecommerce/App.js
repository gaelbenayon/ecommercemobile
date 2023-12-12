import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import ProductsByCategory from './src/screens/ProductsByCategory'
import Categories from './src/screens/Categories';
import { useState } from 'react';
import ProductDetail from './src/screens/ProductDetail';

export default function App() {

  const [categorySelected,setCategorySelected] = useState('');
  const [productIdSelected,setProductIdSelected] = useState(null)

  const [fontLoaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf')
  })

  if (!fontLoaded) return <ActivityIndicator/>

  const onSelectCategory = (category) => {
    return(
      setCategorySelected(category)
    )
  }

  const onGoHome = () => {
    return (
      setCategorySelected(false)
    )
  }

  const onSelectProductId = (productId) => {
    setProductIdSelected(productId)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {
        productIdSelected? <ProductDetail productIdProp={productIdSelected}/> :
        categorySelected? <ProductsByCategory category={categorySelected} onGoHomeEvent={onGoHome} onSelectProductIdEvent={onSelectProductId}/>: <Categories onSelectCategoryEvent={onSelectCategory}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    fontFamily: 'Lato-Regular'
  },
})