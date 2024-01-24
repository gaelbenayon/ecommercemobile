import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    imageContainer: {
        width: '100%',
        height: 170,
    },
    productImage: {
        width: '100%',
        height:'100%'
    },
    infoContainer:{
        width: '100%',
        alignItems:'center',
        paddingVertical:15,
        paddingHorizontal:10,
        backgroundColor: colors.backgroundItem
    },
    title: {
        fontWeight:'bold',
        fontSize: 24,
        textAlign:'center'
    },
    artist:{
        fontFamily: 'Lato-Regular'
    },
    format:{
        fontStyle:'italic',
        fontSize:12,
        opacity:0.5,
        marginTop: 5
    },
    price: {
        fontSize:24,
        fontWeight: 'bold',
        color: colors.primary,
        marginTop:7
    }
})