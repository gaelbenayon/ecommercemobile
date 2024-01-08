import { ActivityIndicator, FlatList, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ProductItem, Search } from '../components';
import { useSelector } from 'react-redux';
import { useGetProductsByCategoryQuery } from '../services/shopService';

const ProductsByCategory = ({ navigation }) => {

  const [productsByCategory, setProductsByCategory] = useState([]);
  const [search, setSearch] = useState('');

  const categorySelected = useSelector(state => state.shopReducer.categorySelected);

  const { data: productsFilteredByCategory, isLoading, error } = useGetProductsByCategoryQuery(categorySelected)

  useEffect(() => {
    if (!isLoading) {
      const productsValues = Object.values(productsFilteredByCategory)
      const productsFiltered = productsValues.filter(
        product => product.title.toLowerCase().includes(search.toLowerCase()))
      setProductsByCategory(productsFiltered)
    }
  }, [isLoading, categorySelected, search])

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
            <Search onSearchHandlerEvent={onSearch} category={categorySelected} />
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