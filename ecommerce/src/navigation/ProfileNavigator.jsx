import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../components";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator()

const ProfileNavigator = () => {
    return (
        <Stack.Navigator
                initialRouteName='profile'
                screenOptions={
                    ({navigation,route}) => ({
                        header: () => <Header 
                        title={'Perfil'} 
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
            </Stack.Navigator>
    )
}

export default ProfileNavigator;