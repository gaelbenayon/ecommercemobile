import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor: "#e6e6ea",
        padding: 10,
        margin: 10,
        borderRadius: 4,
        flexDirection:'row',
        alignItems:'center',
        columnGap: 10
    },
    cardText:{
        textTransform: "capitalize"
    }
})