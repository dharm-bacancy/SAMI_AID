import React from 'react';
import {View,StyleSheet,Text,Image,ImageBackground,Dimensions,TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import Home from '../components/Home';

const HomeScreen = props => {
    return(
        <View style={{flex:1}}>
            <ImageBackground source={require('../../assets/images/background_home.png')} style={{width:'100%', height:'100%'}}>
                <Image source={require('../../assets/images/home_logo.png')} style={styles.logo}/>
                <Text style={styles.welcomeText}>
                    Welcome to the SAMI-Aid Mobile App. The SAMI-Aid team is here to help you navigate the complex world of healthcare. Your first step to a healthier life starts right here!
                </Text>
                <Home navigation={props.navigation}/>
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
    logo:{
        height:150,
        width:192,
        marginTop:Dimensions.get('window').height /13,
        marginLeft:Dimensions.get('window').width / 3.8
    },
    welcomeText:{
        fontFamily:'Gilroy-Bold',
        color:'white',
        marginTop:Dimensions.get('window').width / 11,
        fontSize: 17,
        textAlign:'center',
        marginHorizontal: '5%'
    },
});

export default HomeScreen;