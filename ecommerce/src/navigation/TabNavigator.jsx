import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from "react-native";
import { Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import CartNavigator from "./CartNavigator";
import ShopNavigator from "./ShopNavigator";
import OrdersNavigator from "./OrdersNavigator";
import { colors } from "../global/colors";
import ProfileNavigator from "./ProfileNavigator";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    const [cartQuantity, setCartQuantity] = useState(null);

    const localCart = useSelector(state => state.cartReducer.items);

    useEffect(()=>{
        const cartQuantity = localCart.reduce((acc,item) => acc += item.quantity,0);
        setCartQuantity(cartQuantity);
    },[localCart])

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}
        >
            <Tab.Screen
                name="ShopStack"
                component={ShopNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo name="shop" size={24} color={focused ? "#fff" : "#ccc"} />
                    )
                }}
            />
            <Tab.Screen
                name="CartStack"
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{flexDirection:'row',gap:5}}>
                            <AntDesign name="shoppingcart" size={24} color={focused ? "#fff" : "#ccc"} />
                            {
                            localCart.length > 0 &&
                            <Text style={{color:focused ? "#fff" : "#ccc"}}>{cartQuantity}</Text>
                            }
                        </View>
                        
                    )
                }}
            />
            <Tab.Screen
                name="OrdersStack"
                component={OrdersNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5 name="list" size={24} color={focused ? "#fff" : "#ccc"} />
                    )
                }}
            />
            <Tab.Screen
                name="ProfileStack"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5 name="user" size={24} color={focused ? "#fff" : "#ccc"} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator;

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.primary
    }
})