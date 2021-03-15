import React from 'react';
import {View,Text, TextInput} from 'react-native';

const AccountScreen = props => {
    return(
        <View>
            <Text>Account screen</Text>
        </View>
    );
};

export const screenOptions= navData => {
    return{
        headerShown: false
    };
};

export default AccountScreen;