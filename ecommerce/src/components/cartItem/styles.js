import { StyleSheet } from "react-native"
import { colors } from "../../global/colors"

export const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom:15,
      padding:15,
      backgroundColor: colors.backgroundItem,
      justifyContent:'space-between',
      width:'100%'
    },
    itemContainer:{
      flexDirection:'row',
      alignItems:'center',
      width:'75%',
    },
    cartImage: {
      height: 90,
      width: 90,
      marginRight:20
    },
    infoContainer:{
      rowGap: 10,
      width:'60%'
    },
    textInfo:{
      rowGap: 3,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    format: {
      fontStyle: 'italic',
      opacity: 0.6,
      fontSize: 12
    },
    quantityContainer:{
      flexDirection:'row',
      justifyContent: 'center',
      alignItems:'center',
      borderColor: 'black',
      borderWidth: 0.8,
      gap: 5,
      paddingLeft:6,
      width: '80%',
    },
    deleteButton: {
      color: 'grey'
    },
    columnContainer:{
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      width:'25%'
    },
    price:{
      fontWeight: 'bold',
      fontSize: 20
    }
  })