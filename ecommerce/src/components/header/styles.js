import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
    headerContainer: {
        height: 80,
        backgroundColor: colors.primary,
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection:'row-reverse',
        paddingHorizontal:14
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFFFFF",
        fontFamily: 'Lato-Bold',
        textTransform:'uppercase'
    }
})