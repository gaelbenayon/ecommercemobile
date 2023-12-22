import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Orders from '../screens/Orders'
import { Header } from '../components'

const Stack = createNativeStackNavigator()

const OrdersNavigator = () => {
  return (
    <Stack.Navigator 
        initialRouteName='orders'
        screenOptions={
            ({navigation,route}) => ({
                header: () => <Header 
                title={'Órdenes'} 
                navigation={navigation}
                route={route}/>
            })
        }
    >
        <Stack.Screen
            name='orders'
            component={Orders}
            options={{
                title: 'Órdenes'
            }}
        />
    </Stack.Navigator>
  )
}

export default OrdersNavigator