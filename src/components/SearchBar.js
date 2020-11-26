import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Feather } from "@expo/vector-icons"

const SearchBar = ({term, onTermChange}) => {

    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name='search' />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                style={styles.inputStyle}
                placeholder='Search'
                onEndEditing={() => console.log('submitted')}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
})
