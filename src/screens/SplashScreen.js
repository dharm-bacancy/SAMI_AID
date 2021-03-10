import React from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';

const SplashScreen = props => {
    setTimeout(() => {
        props.navigation.replace('Welcome');
    }, 2000);
    return(
        <View style={styles.splash}>
            <Image source={require('../../assets/images/logo_img.png')} style={{width:120, height:120}}/>
        </View>
    );
};

export const screenOptions = navData => {
    return{
        headerShown:false
    };
};

const styles = StyleSheet.create({
    splash:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default SplashScreen;