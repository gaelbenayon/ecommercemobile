import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Card from '../card';

const CategoryItem = ({category,navigation}) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('products',{category})}>
        <Card style={styles.cardContainer}>
            <Text style={styles.cardText}>{category}</Text>
        </Card>
    </TouchableOpacity>
  )
}

export default CategoryItem;