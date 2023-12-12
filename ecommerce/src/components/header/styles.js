import { StyleSheet } from "react-native"
import { colors } from "../../global/colors"

export const styles = StyleSheet.create({
    headerContainer: {
        height: 80,
        backgroundColor: colors.primary,
        justifyContent: 'space-around',
        alignItems: "center",
        flexDirection:'row',
        paddingHorizontal:10
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFFFFF",
        fontFamily: 'Lato-Bold',
        textTransform:'uppercase'
    }
})