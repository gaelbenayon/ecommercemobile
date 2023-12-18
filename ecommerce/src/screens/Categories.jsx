import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import {CategoryItem} from '../components';
import categoriesData from "../data/categories_data.json";

const Categories = ({navigation}) => {

    const renderCategoryItem = ({item}) => (
        <CategoryItem category={item} navigation={navigation}/>
    )

  return (
    <>
    <View style={styles.categoriesContainer}>
        <FlatList
            data={categoriesData}
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