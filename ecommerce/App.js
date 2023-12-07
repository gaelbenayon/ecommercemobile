import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import ProductsByCategory from './src/screens/ProductsByCategory'
import Categories from './src/screens/Categories';
import { useState } from 'react';

export default function App() {

  const [categorySelected,setCategorySelected] = useState('');


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

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {categorySelected? <ProductsByCategory category={categorySelected}/>: <Categories onSelectCategoryEvent={onSelectCategory}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50
  },
})