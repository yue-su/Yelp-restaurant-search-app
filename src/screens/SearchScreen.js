import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
    return (
        <View style={styles.searchScreen}>
            <SearchBar />
            <Text>Search Screen</Text>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    searchScreen: {
        backgroundColor: '#f8f9fa',
    }
})
