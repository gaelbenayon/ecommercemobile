import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Card from '../card';
import { useDispatch } from 'react-redux';
import { setCategorySelected } from '../../features/shopSlice';

const CategoryItem = ({category,navigation}) => {
  const dispatch = useDispatch()
  return (
    <TouchableOpacity onPress={()=>{
      navigation.navigate('products',{category})
      dispatch(setCategorySelected(category))
      }
      }>
        <Card style={styles.cardContainer}>
            <Text style={styles.cardText}>{category}</Text>
        </Card>
    </TouchableOpacity>
  )
}

export default CategoryItem;