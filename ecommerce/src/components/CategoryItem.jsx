import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import Card from './Card'

const CategoryItem = ({category,onSelectCategoryEvent}) => {
  return (
    <TouchableOpacity onPress={()=>onSelectCategoryEvent(category)}>
        <Card style={styles.carddContainer}>
            <Text style={styles.cardText}>{category}</Text>
        </Card>
    </TouchableOpacity>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    carddContainer:{
        backgroundColor: "#e6e6ea",
        padding: 10,
        margin: 10,
        borderRadius: 4
    },
    cardText:{
        textTransform: "capitalize"
    }
})