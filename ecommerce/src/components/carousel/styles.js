import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container:{
        maxHeight:400
    },
    slide:{
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width: '100%',
        height: "100%"
    }
})