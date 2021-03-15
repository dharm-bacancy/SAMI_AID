import React from 'react';
import {View,Text, TextInput} from 'react-native';

const DialScreen = props => {
    return(
        <View>
            <Text>Dial screen</Text>
        </View>
    );
};

export const screenOptions= navData => {
    return{
        headerShown: false
    };
};

export default DialScreen;