import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import {CategoryItem} from '../components';
// import { useSelector } from 'react-redux';
import { useGetCategoriesQuery } from '../services/shopService';

const Categories = ({navigation}) => {

    // const categories = useSelector(state=>state.shopReducer.categories);

    const {data,isLoading,error} = useGetCategoriesQuery()

    const renderCategoryItem = ({item}) => (
        <CategoryItem category={item} navigation={navigation}/>
    )

  return (
    <>
    <View style={styles.categoriesContainer}>
        <FlatList
            data={data}
            renderItem={renderCategoryItem}
            keyExtractor={item=>item}
        />
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