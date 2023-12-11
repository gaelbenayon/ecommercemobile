import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import products_data from '../data/products_data.json'
import ProductItem from '../components/ProductItem'
import Search from '../components/Search'
import Header from '../components/Header'

const ProductsByCategory = ({category,onGoHomeEvent}) => {

  const [productsByCategory,setProductsByCategory] = useState([]);
  const [search,setSearch] = useState('');

  useEffect(() => {
    const productsFilteredByCategory = products_data.filter(product => product.category == category);
    const productsFiltered = productsFilteredByCategory.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
    setProductsByCategory(productsFiltered);
  },[category,search])

  const renderProductItem = ({item}) => {
    return (
      <ProductItem product={item}/>
    )
  }

  const onSearch = (search) => {
    return(
      setSearch(search)
    )
  }

  return (
    <>
    <Header title="PRODUCTOS"/>
    <Search onSearchHandlerEvent={onSearch} category={category} onGoHomeEvent={onGoHomeEvent}/>
    <FlatList
      data={productsByCategory}
      renderItem={renderProductItem}
      keyExtractor={item=>item.id}
    />
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({
  productItemContainer:{
    flex: 1
  }
})