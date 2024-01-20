import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import {CategoryItem} from '../components';
import { useGetCategoriesQuery } from '../services/shopService';

const Categories = ({navigation,route}) => {

    const {data,isLoading,error} = useGetCategoriesQuery()

    const renderCategoryItem = ({item}) => (
        <CategoryItem category={item} navigation={navigation}/>
    )

  return (
    <>
    <View style={styles.categoriesContainer}>
        {
            isLoading?
            <ActivityIndicator/> :
            data ? 
            <FlatList
            data={data}
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