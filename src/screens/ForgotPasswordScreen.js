import React from 'react';
import {View,StyleSheet,Text,ImageBackground,Image,Dimensions,TouchableOpacity} from 'react-native';
import ForgotPassword from '../components/ForgotPassword';
import Colors from '../constants/Colors';

const ForgotPasswordScreen = props => {
    return(
        <View style={{flex:1}}>
            <ImageBackground source={require('../../assets/images/signin_background.png')} style={styles.signUpBackground}>
                <Image source={require('../../assets/images/logo_sami_aid_white.png')} style={styles.logo}/>
                <Text style={styles.loginLogo}>FORGOT PASSWORD</Text>
                <ForgotPassword navigation={props.navigation}/>
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
    signUpBackground:{
        width:'100%',
        height:350,
        flex:1,
        resizeMode:'contain'
    },
    logo:{
        height:78,
        width:'80%',
        marginTop:Dimensions.get('window').height /6,
        marginLeft:Dimensions.get('window').width / 9
    },
    loginLogo:{
        color:'white',
        fontSize:33,
        fontFamily:'Gilroy-Bold',
        marginTop:Dimensions.get('window').height /20,
        marginBottom: 30,
        marginLeft:Dimensions.get('window').width / 8
    }
});

export default ForgotPasswordScreen;