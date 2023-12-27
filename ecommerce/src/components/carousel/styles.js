import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
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