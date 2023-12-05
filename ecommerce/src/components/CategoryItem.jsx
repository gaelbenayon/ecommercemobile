import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Card from './Card'

const CategoryItem = ({category}) => {
  return (
    <Card style={styles.carddContainer}>
        <Text style={styles.cardText}>{category}</Text>
    </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    carddContainer:{
        backgroundColor: "#edece7",
        padding: 10,
        margin: 10,
        borderRadius: 4
    },
    cardText:{
        textTransform: "capitalize"
    }
})