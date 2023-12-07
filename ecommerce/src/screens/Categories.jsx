import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Header from '../components/Header'
import categoriesData from "../data/categories_data.json"
import CategoryItem from '../components/CategoryItem'

const Categories = ({onSelectCategoryEvent}) => {

    const renderCategoryItem = ({item}) => (
        <CategoryItem category={item} onSelectCategoryEvent={onSelectCategoryEvent}/>
    )

  return (
    <>
    <Header title={"CATEGORÍAS"}/>
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

export default Categories

const styles = StyleSheet.create({
    categoriesContainer: {
        padding: 10,
    }
})