import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Card from '../card';
import { useDispatch } from 'react-redux';
import { setGenreSelected } from '../../features/shopSlice';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../global/colors';

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();

  const handleOnSelectCategory = () => {
    dispatch(setGenreSelected(category));
    navigation.navigate('products');
  }

  return (
    <TouchableOpacity onPress={handleOnSelectCategory}>
      <Card style={styles.cardContainer}>
        <MaterialCommunityIcons name="music-circle" size={24} color={colors.primary} />
        <Text style={styles.cardText}>{category}</Text>
      </Card>
    </TouchableOpacity>
  )
}

export default CategoryItem;