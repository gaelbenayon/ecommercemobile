import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Header } from '../components';
import Categories from '../screens/Categories';
import ProductsByCategory from '../screens/ProductsByCategory';
import ProductDetail from '../screens/ProductDetail';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {

    const categorySelected = useSelector(state => state.shopReducer.categorySelected);

    return (

            <Stack.Navigator
                initialRouteName='categories'
                screenOptions={
                    ({navigation,route}) => ({
                        header: () => <Header 
                        title={
                            route.name === "categories" ? "Categorías" : route.name === "products" ? categorySelected : "detail" ? "Mi selección" : null
                        } 
                        navigation={navigation}
                        route={route}/>
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
    )
}

export default ShopNavigator;