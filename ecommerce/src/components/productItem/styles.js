import { StyleSheet } from "react-native"
import { colors } from "../../global/colors"

export const styles = StyleSheet.create({
    productContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15,
        marginBottom:20,
    },
    productTitle:{
        color:colors.primary,
        textAlign:'left'
    },
    productImage:{
       width:120,
       height:120
    }
})