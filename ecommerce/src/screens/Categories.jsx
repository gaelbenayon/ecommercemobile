import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import {CategoryItem} from '../components';
import { useGetGenresQuery, useGetProductsQuery } from '../services/shopService';
import { useDispatch } from 'react-redux';
import { setProducts, setGenres } from '../features/shopSlice';

const Categories = ({navigation}) => {

    const dispatch = useDispatch();

    const {data:genresData,isLoading:isLoadingGenres,error:errorGenres} = useGetGenresQuery();
    const {data:productsData,isLoading:isLoadingProducts,error:errorProducts} = useGetProductsQuery();

    const renderCategoryItem = ({item}) => (<CategoryItem category={item} navigation={navigation}/>);

    const setLocalData = () => {
        if (genresData && !isLoadingGenres && !errorGenres) {
            dispatch(setGenres(genresData));
        }
        if (productsData && !isLoadingProducts && !errorProducts) {
            dispatch(setProducts(productsData));
        }
    }

    useEffect(()=>{
        setLocalData();
    },[genresData,productsData, dispatch])

  return (
    <View style={styles.categoriesContainer}>
        {
            isLoadingGenres || isLoadingProducts?
            <ActivityIndicator/> :
            genresData ? 
            <FlatList
            data={genresData}
            renderItem={renderCategoryItem}
            keyExtractor={item=>item}
            /> :
            null
        }
    </View>
  )
}

export default Categories;

const styles = StyleSheet.create({
    categoriesContainer: {
        padding: 10,
    }
})