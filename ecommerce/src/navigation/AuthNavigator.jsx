import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../components";
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
                initialRouteName='login'
                screenOptions={
                    ({navigation,route}) => ({
                        header: () => <Header 
                        title={'SHOP - Inicio'} 
                        navigation={navigation}
                        route={route}/>
                    })
                }
            >
                <Stack.Screen
                    name={'signup'}
                    component={SignUp}
                />
                <Stack.Screen
                    name={'login'}
                    component={Login}
                />
            </Stack.Navigator>
    )
}

export default AuthNavigator;