import React from 'react';
import {View,Text, TextInput} from 'react-native';

const DemoScreen = props => {
    return(
        <View>
            <Text>Demo screen</Text>
        </View>
    );
};

export const screenOptions= navData => {
    return{
        headerShown: false
    };
};

export default DemoScreen;