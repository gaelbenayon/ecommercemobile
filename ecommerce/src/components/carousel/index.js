import { View, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { useSelector } from 'react-redux'

const {width} = Dimensions.get('window')

const Carousel = () => {
    const images = useSelector(state=>state.shopReducer.productSelected.images)
  return (
    <Swiper style={styles.container} showsButtons={true}>
        {images.map((img,index) => (
            <View style={styles.slide} key={index}>
                <Image source={{uri:img}} style={styles.image}/>
            </View>
        ))}
    </Swiper>
  )
}

export default Carousel

const styles = StyleSheet.create({
    container:{
        height:300
    },
    slide:{
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width: width,
        height:300
    }
})