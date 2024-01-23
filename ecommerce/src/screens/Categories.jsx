import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import {CategoryItem} from '../components';
import { useGetCategoriesQuery, useGetProductsQuery } from '../services/shopService';
import { useDispatch } from 'react-redux';
import { setProducts, setCategories } from '../features/shopSlice';

const Categories = ({navigation,route}) => {

    const dispatch = useDispatch();

    const {data:categoriesData,isLoading:isLoadingCategories,error:errorCategories} = useGetCategoriesQuery();
    const {data:productsData,isLoading:isLoadingProducts,error:errorProducts} = useGetProductsQuery();

    const renderCategoryItem = ({item}) => (
        <CategoryItem category={item} navigation={navigation}/>
    )

    const setLocalData = () => {
        if (categoriesData && !isLoadingCategories) {
            dispatch(setCategories(categoriesData));
        }
        if (productsData && !isLoadingProducts) {
            dispatch(setProducts(productsData));
        }
    }

    useEffect(()=>{
        setLocalData();
    },[categoriesData,productsData, dispatch])

  return (
    <>
    <View style={styles.categoriesContainer}>
        {
            isLoadingCategories || isLoadingProducts?
            <ActivityIndicator/> :
            categoriesData ? 
            <FlatList
            data={categoriesData}
            renderItem={renderCategoryItem}
            keyExtractor={item=>item}
            /> :
            null
        }
    </View>
    </>
  )
}

export default Categories;

const styles = StyleSheet.create({
    categoriesContainer: {
        padding: 10,
    }
})