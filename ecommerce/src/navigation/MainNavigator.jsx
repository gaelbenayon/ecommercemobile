import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfilePictureQuery } from "../services/profileService";
import { useEffect } from "react";
import { setUserProfilePicture } from "../features/authSlice";

const MainNavigator = () => {
    const user = useSelector(state=>state.authReducer.user);
    const localId = useSelector(state => state.authReducer.localId);

    const dispatch = useDispatch();

    const {data, isLoading, error} = useGetProfilePictureQuery(localId);

    useEffect(()=>{
        if (data && !isLoading) {
            dispatch(setUserProfilePicture(data.image))
        }
    },[data,user,localId])

    return (
        <NavigationContainer>
            {
                user && !isLoading ?
                <TabNavigator/> :
                <AuthNavigator/>
            }
        </NavigationContainer>
    )
}

export default MainNavigator;