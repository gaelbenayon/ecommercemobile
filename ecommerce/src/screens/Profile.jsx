import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../features/authSlice';
import { Ionicons } from '@expo/vector-icons';

const Profile = ({ navigation }) => {

    const localImage = useSelector(state => state.authReducer.profilePicture);

    const user = useSelector(state => state.authReducer.user);

    const dispatch = useDispatch();

    const onLogOutHandler = () => {
        dispatch(logOutUser())
    }

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Pressable
                    style={({ pressed }) => [
                        { backgroundColor: pressed ? 'grey' : '#fff' },
                        styles.imageContainer
                    ]}
                    onPress={() => navigation.navigate('imageSelector')}>
                    {
                        localImage ?
                            <Image
                                source={{ uri: localImage }}
                                style={styles.profileImage}
                            /> :
                            <Image
                                source={require('../../assets/user.png')}
                                style={styles.profileImage}
                                resizeMode='contain'
                            />
                    }
                </Pressable>
                <View style={styles.userInfoContainer}>
                    <Text style={styles.textInfo}>Mi información</Text>
                    <Text>{user}</Text>
                    <Text>Edad: {Math.ceil(Math.random() * 97 + 18)}</Text>
                    <Text>Ubicación: Argentina</Text>
                </View>
            </View>
            <View style={styles.sessionContainer}>
                <Pressable onPress={onLogOutHandler}>
                    <Ionicons name="exit-outline" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container :{
        margin: 20,
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    profileContainer: {
        flexDirection: 'row',
        gap: 30
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    userInfoContainer: {
        gap: 4
    },
    textInfo: {
        fontWeight: 'bold'
    },
    sessionContainer: {
        alignSelf: 'flex-start'
    }
})