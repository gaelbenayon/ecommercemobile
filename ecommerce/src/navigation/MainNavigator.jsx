import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfilePictureQuery } from "../services/profileService";
import { useEffect, useState } from "react";
import { setUser, setUserProfilePicture } from "../features/authSlice";
import { fetchDbSession } from "../db";
import { ActivityIndicator } from "react-native";

const MainNavigator = () => {

    const [isLoading,setIsLoading] = useState(true);

    const user = useSelector(state=>state.authReducer.user);
    const localId = useSelector(state => state.authReducer.localId);

    const dispatch = useDispatch();

    const {data, isLoading:isPictureLoading, error} = useGetProfilePictureQuery(localId);

    useEffect(()=>{
        if (data && !isPictureLoading && !error) {
            dispatch(setUserProfilePicture(data.image));
        }
    },[data,user,localId,isPictureLoading, dispatch])

    useEffect(()=>{
        (async ()=>{
            try {
                const session = await fetchDbSession()
                if (session?.rows.length) {
                    const user = session.rows._array[0];
                    dispatch(setUser(user));
                }
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        })()
    },[])

    return (
        <NavigationContainer>
            {
                isLoading ? <ActivityIndicator/> :
                user ?
                <TabNavigator/> :
                <AuthNavigator/>
            }
        </NavigationContainer>
    )
}

export default MainNavigator;