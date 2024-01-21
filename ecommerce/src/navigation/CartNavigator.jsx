import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../components";
import Cart from "../screens/Cart";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator
                initialRouteName='cart'
                screenOptions={
                    ({navigation,route}) => ({
                        header: () => <Header 
                        title={'Carrito'} 
                        navigation={navigation}
                        route={route}/>
                    })
                }
            >
                <Stack.Screen
                    name={'cart'}
                    component={Cart}
                    options={{
                        title:'Carrito',
                    }}
                />
            </Stack.Navigator>
    )
}

export default CartNavigator;