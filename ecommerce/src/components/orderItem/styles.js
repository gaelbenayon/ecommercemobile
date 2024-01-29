import { StyleSheet } from "react-native";
import {colors} from '../../global/colors';

export const styles = StyleSheet.create({
    ordersContainer: {
        marginBottom: 15
    },
    orderInfo: {
        marginBottom: 10
    },
    orderContainer: {
        marginBottom: 10,
        flexDirection: 'row'
    },
    orderImage: {
        width: 50,
        height: 50,
        marginRight: 5
    },
    orderDetailContainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:5
    },
    searchIcon:{
        color: colors.primary
    },
    modalContainer:{
        flexDirection:'row',
        backgroundColor:colors.backgroundItem,
        flex:1,
        marginHorizontal: 10,
        paddingVertical:30    
    }
})