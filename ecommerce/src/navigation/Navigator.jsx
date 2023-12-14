import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import { Header } from '../components'
import Categories from '../screens/Categories'
import ProductsByCategory from '../screens/ProductsByCategory'
import ProductDetail from '../screens/ProductDetail'

const Stack = createNativeStackNavigator()

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='categories'
                screenOptions={
                    ({navigation,route}) => ({
                        header: () => <Header title={route.name} navigation={navigation}/>
                    })
                }
            >
                <Stack.Screen
                    name={'categories'}
                    component={Categories}
                    options={{
                        title:'Categorías',
                    }}
                />
                <Stack.Screen
                    name={'products'}
                    component={ProductsByCategory}
                    options={{title:'Productos'}}
                />
                <Stack.Screen
                    name={'detail'}
                    component={ProductDetail}
                    options={{title:'Detalle'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator