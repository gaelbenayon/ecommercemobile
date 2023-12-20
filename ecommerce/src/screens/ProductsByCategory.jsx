import { FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import products_data from '../data/products_data.json';
import {ProductItem, Search} from '../components';

const ProductsByCategory = ({navigation,route}) => {

  const [productsByCategory,setProductsByCategory] = useState([]);
  const [search,setSearch] = useState('');

  const {category} = route.params;

  useEffect(() => {
    const productsFilteredByCategory = products_data.filter(product => product.category == category);
    const productsFiltered = productsFilteredByCategory.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
    setProductsByCategory(productsFiltered);
  },[category,search])

  const renderProductItem = ({item}) => {
    return (
      <ProductItem product={item} navigation={navigation}/>
    )
  }

  const onSearch = (search) => {
    return(
      setSearch(search)
    )
  }

  return (
    <>
    <Search onSearchHandlerEvent={onSearch} category={category}/>
    <FlatList
      data={productsByCategory}
      renderItem={renderProductItem}
      keyExtractor={item=>item.id}
    />
    </>
  )
}

export default ProductsByCategory;