import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setUserProfilePicture } from '../features/authSlice';
import { usePutProfilePictureMutation } from '../services/profileService';

const ImageSelector = ({ navigation }) => {

    const [image, setImage] = useState("");

    const [triggerPutPicture, result] = usePutProfilePictureMutation();

    const localId = useSelector(state => state.authReducer.localId);

    const localImage = useSelector(state => state.authReducer.profilePicture);

    const dispatch = useDispatch();

    const onPickImageHandler = async () => {
        const isCameraOk = await verifyCameraPermissions();
        if (isCameraOk) {
            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                base64: true,
                quality: 0.3
            })
            if (!result.canceled) {
                setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
            }
        }
    }

    const onConfirmImageHandler = () => {
        dispatch(setUserProfilePicture(image));
        triggerPutPicture({image,localId});
        navigation.goBack();
    }

    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (granted) {
            return true
        } else {
            return false
        }
    }

    return (
        <View style={styles.container}>
            {
                localImage || image ?
                    <View style={styles.isImageContainer}>
                        <Image
                            source={{ uri: image || localImage }}
                            style={styles.image}
                            resizeMode={'cover'}
                        />
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity onPress={onPickImageHandler} style={styles.button}>
                                <Text>Cambiar imagen</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onConfirmImageHandler} style={styles.button}>
                                <Text>Guardar cambios</Text>
                            </TouchableOpacity>
                        </View>
                    </View> :
                    <View>
                        <MaterialIcons name='no-photography' size={200} color='black' />
                        <TouchableOpacity onPress={onPickImageHandler} style={styles.button}>
                            <Text>Tomar una foto</Text>
                        </TouchableOpacity>
                    </View>
            }
        </View>
    )
}

export default ImageSelector;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
    },
    isImageContainer: {
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 200,
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 20
    },
    button: {
        marginTop: 20,
        alignSelf: 'center'
    }
})