import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../components";
import Profile from "../screens/Profile";
import ImageSelector from "../screens/ImageSelector";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator
                initialRouteName='profile'
                screenOptions={
                    ({navigation,route}) => ({
                        header: () => <Header 
                        title={
                            route.name === "profile" ? "PERFIL" : "EDITAR PERFIL"
                        } 
                        navigation={navigation}
                        route={route}/>
                    })
                }
            >
                <Stack.Screen
                    name={'profile'}
                    component={Profile}
                    options={{
                        title:'Perfil',
                    }}
                />
                <Stack.Screen
                    name={'imageSelector'}
                    component={ImageSelector}
                    options={{
                        title:'Seleccionar imagen'
                    }}
                />
            </Stack.Navigator>
    )
}

export default ProfileNavigator;