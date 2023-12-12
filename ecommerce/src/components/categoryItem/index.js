import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles';

import {Card} from '../index'

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