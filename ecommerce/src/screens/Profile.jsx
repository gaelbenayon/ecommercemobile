import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../features/authSlice';

const Profile = () => {

    const dispatch = useDispatch();

    const onLogOutHandler = () => {
        dispatch(logOutUser())
    }

    return (
        <View>
            <Text>Profile</Text>
            <View>
                <TouchableOpacity onPress={onLogOutHandler}>
                    <Text>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({

})