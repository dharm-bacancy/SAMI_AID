import React from 'react';
import {View,StyleSheet,Text,Image,ImageBackground,Dimensions,TouchableOpacity} from 'react-native';
import CustomButton from '../../components/button/CustomButton';
import Colors from '../../constants/Colors';
import * as Animatable from 'react-native-animatable';

const WelcomeScreen = props => {
    return(
        <View style={{flex:1}}>
            <ImageBackground source={require('../../../assets/images/welcomeimg.png')} style={{width:'100%', height:'100%'}}>
            <Animatable.View  animation='zoomIn' >
                <Image source={require('../../../assets/images/logo_sami_aid_white.png')} style={styles.logo}/>
            </Animatable.View>
                <Text style={styles.welcomeText}>WELCOME TO SAMI-AID</Text>
                <Text style={styles.subHeaderText}>Need to see a doctor? Don't worry about mystery pricing, because you have SAMI-AID!</Text>
                <CustomButton title='CREATE ACCOUNT' style={styles.account} onSelect={()=>props.navigation.replace('SignUp')}/>
                <View style={styles.singInAccount}>
                    <Text style={styles.accountText}>Already have an account?</Text>
                    <TouchableOpacity onPress={()=> props.navigation.navigate('SignIn')}>
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
    account:{
        backgroundColor:Colors.primaryColor,
        marginTop:Dimensions.get('window').height /25,
        marginLeft:Dimensions.get('window').width /8.5,
        width:Dimensions.get('window').width / 1.3,
        justifyContent:'space-evenly',
        alignItems:'center',
        overflow:'hidden'
    },
    logo:{
        height:78,
        width:'80%',
        marginTop:Dimensions.get('window').height /3.6,
        marginLeft:Dimensions.get('window').width / 9
    },
    welcomeText:{
        fontFamily:'Gilroy-Bold',
        fontSize:30,
        marginTop:Dimensions.get('window').height /3.9,
        marginLeft:Dimensions.get('window').width /9.5,
    },
    subHeaderText:{
        alignItems:'center',
        justifyContent:'center',
        fontFamily:'Gilroy-Medium',
        color:Colors.statusBar,
        marginTop:Dimensions.get('window').width / 40,
        fontSize: 15,
        textAlign:'center',
        marginHorizontal: '5%'
    },
    accountText:{
        fontFamily:'Gilroy-Bold',
        fontSize:20
    },
    singInAccount:{
        flexDirection:'row',
        marginTop:Dimensions.get('window').width / 20,
        marginLeft:Dimensions.get('window').width / 10
    },
    singIn:{
        color:Colors.blue,
        fontSize: 20,
        marginLeft: 10,
        textDecorationLine:'underline',
        fontFamily:'Gilroy-Heavy'
    }
});

export default WelcomeScreen;