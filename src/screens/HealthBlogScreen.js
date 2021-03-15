import React from 'react';
import {View,Text, TextInput} from 'react-native';

const HealthBlogScreen = props => {
    return(
        <View>
            <Text>HealthBlog screen</Text>
        </View>
    );
};

export const screenOptions= navData => {
    return{
        headerShown: false
    };
};

export default HealthBlogScreen;