import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    cart: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom:15,
      gap: 20
    },
    cartImage: {
      height: 50,
      width: 50,
      marginRight:20
    },
    infoContainer:{
      gap: 3
    },
    cartTitle: {
      fontWeight: 'bold'
    },
    deleteButton: {
      color: 'grey'
    }
  })