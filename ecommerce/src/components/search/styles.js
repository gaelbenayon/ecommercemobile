import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    searchErrorText:{
        padding:3,
        color:'grey',
        fontWeight:'bold',
        fontSize:10
    }
})