import { TextInput, View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

const Search = ({ onSearchHandlerEvent, category, onGoHomeEvent }) => {

    const [searchInput, setSearchInput] = useState('');
    const [searchError,setSearchError] = useState('');

    const onSearchHandler = () => {
        const regEx = /[^\w\s]/
        if (regEx.test(searchInput)) {
            setSearchError('Sólo se admiten letras y números')
            setSearchInput('')
        } else {
            setSearchError('')
            onSearchHandlerEvent(searchInput)
        }
    }

    const onResetSearchHandler = () => {
        onSearchHandlerEvent('')
        setSearchInput('')
    }

    return (
        <>
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.textInput}
                value={searchInput}
                onChangeText={setSearchInput}
                placeholder={`Buscar en ${category}`}
            />
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => onSearchHandler(searchInput)}>
                    <AntDesign name="search1" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onResetSearchHandler()}>
                    <Feather name="delete" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onGoHomeEvent()}>
                    <Ionicons name="home-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
        {
            searchError ? <View><Text style={styles.searchErrorText}>{searchError}</Text></View> : null
        }
        </>
    )
}

export default Search