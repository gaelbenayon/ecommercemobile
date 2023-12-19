import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from '../card'

const CartItem = ({itemProp}) => {
  return (
    <Card style={styles.card}>
        <View>
            <Text style={styles.cardTitle}>{itemProp.title}</Text>
            <Text>{itemProp.quantity} unidades</Text>
            <Text>Total: ${itemProp.price * itemProp.quantity}</Text>
            <TouchableOpacity style={styles.cardButton} onPress={()=>null}>
                <Text>Eliminar</Text>
            </TouchableOpacity>
        </View>
    </Card>
  )
}

export default CartItem

const styles = StyleSheet.create({
    card: {

    },
    cardTitle:{

    },
    cardButton:{

    }
})