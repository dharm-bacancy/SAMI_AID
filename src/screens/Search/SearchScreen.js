import React from 'react';
import {View,Text, TextInput} from 'react-native';

const SearchScreen = props => {
    return(
        <View>
            <Text>Search screen</Text>
        </View>
    );
};

export const screenOptions= navData => {
    return{
        headerShown: false
    };
};

export default SearchScreen;