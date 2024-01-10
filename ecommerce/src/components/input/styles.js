import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
    labelText:{
        textAlign:'center',
        paddingTop:5
    },
    textInput:{
        backgroundColor:colors.primary,
        borderRadius:10,
        padding:10,
        color:'#fff',
        minWidth:'50%'
    }
})