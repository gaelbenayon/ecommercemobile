import { ActivityIndicator, FlatList, Text } from 'react-native';
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

  const renderProductItem = ({ item }) => {
    return (
      <ProductItem product={item} navigation={navigation} />
    )
  }

  const onSearch = (search) => {
    return (
      setSearch(search)
    )
  }

  return (
    <>
      {
        isLoading ?
          <ActivityIndicator /> :
          <>
            <Search onSearchHandlerEvent={onSearch} category={genreSelected} />
            <FlatList
              data={productsByCategory}
              renderItem={renderProductItem}
              keyExtractor={item => item.id}
            />
          </>
      }
    </>
  )
}

export default ProductsByCategory;