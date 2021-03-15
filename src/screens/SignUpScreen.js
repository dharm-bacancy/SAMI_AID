import React from 'react';
import {View,StyleSheet,Text,ImageBackground,Image,Dimensions,TouchableOpacity} from 'react-native';
import SignUp from '../components/SignUp';
import Colors from '../constants/Colors';
import * as Animatable from 'react-native-animatable';

const SignUpScreen = props => {
    return(
        <View style={{flex:1}}>
            <ImageBackground source={require('../../assets/images/signin_background.png')} style={styles.signUpBackground}>
            <Animatable.View  animation='pulse' easing="ease-out" iterationCount={3} style={styles.animation}>
                <Image source={require('../../assets/images/logo_sami_aid_white.png')} style={styles.logo}/>
            </Animatable.View>
                <Text style={styles.signUpLogo}>SIGN UP</Text>
                <SignUp navigation={props.navigation} />
                <View style={styles.singInAccount}>
                    <Text style={styles.accountText}>Existing User?</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('SignIn')}>
                        <Text style={styles.singIn}>Sign In</Text>
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
    },
    logo:{
        height:78,
        width:'80%',
        marginTop:Dimensions.get('window').height /13,
        marginLeft:Dimensions.get('window').width / 9
    },
    signUpLogo:{
        color:'white',
        fontSize:37,
        fontFamily:'Gilroy-Bold',
        marginTop:Dimensions.get('window').height /22,
        marginLeft:Dimensions.get('window').width / 3.1
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

export default SignUpScreen;