import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { StyleSheet } from "react-native";
import { Entypo, AntDesign, FontAwesome5  } from '@expo/vector-icons'; 
import CartNavigator from "./CartNavigator";
import ShopNavigator from "./ShopNavigator";
import OrdersNavigator from "./OrdersNavigator";
import { colors } from "../global/colors";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
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
                        tabBarIcon: ({focused}) => (
                            <Entypo name="shop" size={24} color={focused?"#fff":"#ccc"} />
                        )
                    }}
                />
                <Tab.Screen 
                    name="CartStack" 
                    component={CartNavigator} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <AntDesign name="shoppingcart" size={24} color={focused?"#fff":"#ccc"} />
                        )
                    }}
                />
                <Tab.Screen
                    name="OrdersStack"
                    component={OrdersNavigator}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <FontAwesome5 name="list" size={24} color={focused?"#fff":"#ccc"} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator;

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.primary
    }
})