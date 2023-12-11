import { TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Search = ({ onSearchHandlerEvent, category, onGoHomeEvent }) => {

    const [searchInput, setSearchInput] = useState('');

    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.textInput}
                value={searchInput}
                onChangeText={setSearchInput}
                placeholder={'Buscar en ' + category}
            />
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => onSearchHandlerEvent(searchInput)}>
                    <AntDesign name="search1" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onSearchHandlerEvent('')}>
                    <Feather name="trash" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onGoHomeEvent()}>
                    <Ionicons name="home-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    buttonsContainer:{
        flexDirection:'row'
    }
})