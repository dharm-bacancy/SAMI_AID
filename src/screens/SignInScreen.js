import React,{useState} from 'react';
import {View,StyleSheet,Text,ImageBackground,Image,Dimensions,TouchableOpacity} from 'react-native';
import SignIn from '../components/SignIn';
import Colors from '../constants/Colors';

const SignInScreen = props => {
    return(
        <View style={{flex:1}}>
            <ImageBackground source={require('../../assets/images/signin_background.png')} style={styles.signUpBackground}>
                <Image source={require('../../assets/images/logo_sami_aid_white.png')} style={styles.logo}/>
                <Text style={styles.loginLogo}>LOGIN</Text>
                <SignIn
                    //onPress={()=>props.navigation.replace('Home')} 
                    navigation={props.navigation}
                    onForgot={()=>props.navigation.replace('ForgotPassword')}
                />
                <View style={styles.singInAccount}>
                    <Text style={styles.accountText}>New User?</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('SignUp')}>
                        <Text style={styles.singIn}>Create an account</Text>
                    </TouchableOpacity>
                </View>
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
        marginTop:Dimensions.get('window').height /13,
        marginLeft:Dimensions.get('window').width / 9
    },
    loginLogo:{
        color:'white',
        fontSize:37,
        fontFamily:'Gilroy-Bold',
        marginTop:Dimensions.get('window').height /25,
        marginBottom: 4,
        marginLeft:Dimensions.get('window').width / 2.7
    },
    accountText:{
        fontFamily:'Gilroy-Bold',
        fontSize:20
    },
    singInAccount:{
        flexDirection:'row',
        marginTop:Dimensions.get('window').width / 20,
        marginBottom:10,
        marginLeft:Dimensions.get('window').width / 4.2
    },
    singIn:{
        color:Colors.blue,
        fontSize: 20,
        marginLeft: 10,
        textDecorationLine:'underline',
        fontFamily:'Gilroy-Heavy'
    }
});

export default SignInScreen;