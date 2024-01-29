import { ActivityIndicator, FlatList, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ProductItem, Search } from '../components';
import { useSelector } from 'react-redux';
import { useGetProductsByGenreQuery } from '../services/shopService';

const ProductsByCategory = ({ navigation }) => {

  const [productsByCategory, setProductsByCategory] = useState([]);
  const [search, setSearch] = useState('');

  const genreSelected = useSelector(state => state.shopReducer.genreSelected);

  const { data: productsFilteredByGenre, isLoading, error } = useGetProductsByGenreQuery(genreSelected);

  useEffect(() => {
    if (!isLoading && productsFilteredByGenre && !error) {
      const productsValues = Object.values(productsFilteredByGenre);
      const productsFiltered = productsValues.filter(product => (product.title.toLowerCase().includes(search.toLowerCase())) || (product.artist.toLowerCase().includes(search.toLowerCase())));
      setProductsByCategory(productsFiltered);
    }
  }, [isLoading, genreSelected, search])

  const renderProductItem = ({ item }) => (<ProductItem product={item} navigation={navigation} />);

  const onSearch = (search) => {setSearch(search)};

  return (
    <>
      {
        isLoading ?
          <ActivityIndicator /> :
          <>
            <Search onSearchHandlerEvent={onSearch} category={genreSelected} />
            {
              productsByCategory.length ?
                <FlatList
                  data={productsByCategory}
                  renderItem={renderProductItem}
                  keyExtractor={item => item.id}
                /> :
                <Text style={styles.noResultsText}>No hay resultados para "{search}"</Text>
            }

          </>
      }
    </>
  )
}

export default ProductsByCategory;

const styles = StyleSheet.create({
  noResultsText:{
    padding: 10
  }
})