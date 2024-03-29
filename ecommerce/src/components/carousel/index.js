import { View, Image, Text } from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import { useSelector } from 'react-redux';
import { styles } from './styles';

const Carousel = () => {
  const images = useSelector(state => state.shopReducer.productSelected.images);
  if (images) {
    return (
      <Swiper style={styles.container} activeDotStyle={styles.swiperStyle} showsButtons={images.length > 1 ? true : false} nextButton={<Text style={styles.buttonText}>›</Text>} prevButton={<Text style={styles.buttonText}>‹</Text>}>
        {images.map((img, index) => (
          <View style={styles.slide} key={index}>
            <Image source={{ uri: img }} style={styles.image} />
          </View>
        ))}
      </Swiper>
    )
  }
}

export default Carousel;