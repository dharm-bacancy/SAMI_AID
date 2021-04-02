import React from 'react';
import {View,Text,Image,StyleSheet,ImageBackground,Dimensions,TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import CustomButton from '../../components/CustomButton';

const UserConformationScreen = props => {
    return(
        <View style={{flex:1}}>
            <ImageBackground source={require('../../../assets/images/shape.png')} style={styles.image}>
                <Image source={require('../../../assets/images/logo_sami_aid_white.png')} style={styles.logo}/>
                <View style={styles.header}>
                    <Text style={styles.patientText}>Patient Intake</Text>
                    <Text style={styles.headerText}>Who needs help today?</Text>
                </View>
                <View style={styles.circle}>
                    <Text style={styles.textCircle}>D J</Text>
                </View>
                <Text style={styles.samifiveText}>Dharm Jakasaniya</Text>
                <Text style={styles.infoText}>
                    When you click "Continue," you will be asked to enter{'\n'}your payment information.{'\n'}You don't need to pay if you have an incomplete{'\n'}appointment. 
                </Text>
            </ImageBackground>
            <CustomButton title='Back' style={styles.backButton} onSelect={()=>props.navigation.goBack()}/>
            <CustomButton title='Continue' style={styles.continueButton} onSelect={()=>props.navigation.navigate('PatientIntake')}/>
        </View>
    );
};

export const screenOptions= navData => {    
    return{
        headerShown: false
    };
};

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:120,
        alignItems:'center'
    },
    logo:{
        marginTop: '5%',
        marginRight: '45%',
        width: '52%',
        height:51
    },
    patientText:{
        color:Colors.primaryColor,
        fontSize:30,
        fontFamily:'FiraSans-SemiBold',
    },
    header:{
        alignItems:'center',
        marginTop:50
    },
    headerText:{
        fontSize:26,
        fontFamily:'FiraSans-SemiBold',
        marginTop:20
    },
    circle:{
        backgroundColor:Colors.primaryColor,
        borderRadius:100,
        borderColor:'white',
        borderWidth:3,
        elevation:25,
        padding:65,
        marginTop:'10%'
    },
    textCircle:{
        color:'white',
        fontSize:25,
        fontWeight:'bold'    
    },
    samifiveText:{
        fontSize:20,
        marginTop:25,
        fontFamily:'FiraSans-SemiBold'
    },
    infoText:{
        fontSize:16,
        marginTop:25,
        fontFamily:'FiraSans-SemiBoldItalic',
        textAlign:'center',
        color:'gray'
    },
    backButton:{
        backgroundColor:Colors.primaryColor,
        width:Dimensions.get('window').width / 1.3,
        justifyContent:'space-evenly',
        alignItems:'center',
        overflow:'hidden',
        marginTop:500,
        marginLeft:50
    },
    continueButton:{
        backgroundColor:Colors.primaryColor,
        width:Dimensions.get('window').width / 1.3,
        justifyContent:'space-evenly',
        alignItems:'center',
        overflow:'hidden',
        marginTop:10,
        marginLeft:50
    }
});

export default UserConformationScreen;