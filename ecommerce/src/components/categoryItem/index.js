import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Card from '../card';
import { useDispatch } from 'react-redux';
import { setCategorySelected } from '../../features/shopSlice';

const CategoryItem = ({category,navigation}) => {
  const dispatch = useDispatch();

  const handleOnSelectCategory = () => {
    dispatch(setCategorySelected(category));
    navigation.navigate('products',category);
  }
  
  return (
    <TouchableOpacity onPress={handleOnSelectCategory}>
        <Card style={styles.cardContainer}>
            <Text style={styles.cardText}>{category}</Text>
        </Card>
    </TouchableOpacity>
  )
}

export default CategoryItem;