import React,{useState} from 'react';
import {StyleSheet,View,Text,Dimensions,Image,ScrollView} from 'react-native';
import Colors from '../constants/Colors';
import CallButton from './button/CallButton';
const Dial = props =>{
    return(
        <View style={styles.dialButton}>
            <View style={styles.button}>
                <CallButton
                    image={require('../../assets/images/md_img.png')}
                    title='CALL YOUR SAMI-AID CONCIERGE'
                    style={{marginTop:5,height: Dimensions.get("window").height / 6,width: Dimensions.get('window').width / 1.3}}
                    textStyle={{fontSize:18}}
                />
                <CallButton
                    image={require('../../assets/images/contact_img_white.png')}
                    title='CONNECT TO EMERGENCY SERVICES'
                    style={{marginTop:35,backgroundColor:Colors.primaryColor,height: Dimensions.get("window").height / 6,width: Dimensions.get('window').width / 1.3}}
                    textStyle={{color:'white', fontSize:18}}
                />
            </View>
            <Text style={styles.emergencyText}>Connect to Emergency Services anywhere in the world</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    dialButton:{
        height:'52%',
        width:'83%',
        backgroundColor:'white',
        marginLeft:Dimensions.get('window').width / 12,
        elevation: 15,
        borderRadius: 19,
        marginTop:40
    },
    button:{
        marginTop:17,
    },
    emergencyText:{
        textAlign:'center',
        fontSize:13,
        fontFamily:'FiraSans-SemiBoldItalic',
        marginHorizontal:50,
        marginTop:25
    }
});

export default Dial;