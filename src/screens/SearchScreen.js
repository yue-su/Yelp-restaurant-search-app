import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {

    const [term, setTerm] = useState("")

    

    return (
        <View style={styles.searchScreen}>
            <SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)} />
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
