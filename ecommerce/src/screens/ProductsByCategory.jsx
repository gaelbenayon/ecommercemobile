import { FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import {ProductItem, Search} from '../components';
import { useSelector, useDispatch } from 'react-redux';

const ProductsByCategory = ({navigation,route}) => {

  const [productsByCategory,setProductsByCategory] = useState([]);
  const [search,setSearch] = useState('');

  const category = useSelector(state=>state.shopReducer.categorySelected)
  const productsFilteredByCategory = useSelector(state=>state.shopReducer.productsFilteredByCategory)

  useEffect(() => {
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