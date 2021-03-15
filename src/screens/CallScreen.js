import React from 'react';
import {View,Text,TextInput,Image,ImageBackground,StyleSheet,Dimensions} from 'react-native';
import Call from '../components/Call';
const CallScreen = props => {
    return(
        <View style={{flex:1}}>
            <ImageBackground source={require('../../assets/images/connectToMDback_image.png')} style={styles.callScreenBackground}>
                <Image source={require('../../assets/images/home_logo.png')} style={styles.logo}/>
                <Call navigation={props.navigation}/>
            </ImageBackground>
        </View>
    );
};

export const screenOptions= navData => {
    return{
        headerShown: false
    };
};

const styles = StyleSheet.create({
    callScreenBackground:{
        width:'100%',
        height:450,
        flex:1
    },
    logo:{
        height:150,
        width:192,
        marginTop:Dimensions.get('window').height /7,
        marginLeft:Dimensions.get('window').width / 3.5
    },
});

export default CallScreen;