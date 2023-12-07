import { TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Search = ({onSearchHandlerEvent}) => {

    const [searchInput,setSearchInput] = useState('');

  return (
    <View style={styles.searchContainer}>
        <TextInput 
            style={styles.textInput}
            value={searchInput}
            onChangeText={setSearchInput}
            placeholder='Buscar'
        />
        <TouchableOpacity onPress={()=>onSearchHandlerEvent(searchInput)}>
            <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onSearchHandlerEvent('')}>
            <Feather name="trash" size={24} color="black" />
        </TouchableOpacity>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    searchContainer:{
        flexDirection:'row',
    }
})