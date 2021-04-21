import React,{useState} from 'react';
import {View,Text,TextInput,Image,StyleSheet,Dimensions,ScrollView,TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import CustomButton from '../../components/button/CustomButton';

const AppointmentScreen = props =>{
    return(
        <View style={{flex:1}}>
            <View style={{flexDirection:'row'}}>
                <View style={styles.intakeCircle}>
                    <Text style={styles.textCircle}>1</Text>
                </View>
                <Image source={require('../../../assets/images/unnamed.png')} style={styles.imageLine}/>
                <View style={styles.assessmentCircle}>
                    <Text style={styles.assessmentText}>2</Text>
                </View>
                <Image source={require('../../../assets/images/unnamed.png')} style={styles.imageLine}/>
                <View style={styles.assessmentCircle}>
                    <Text style={styles.assessmentText}>3</Text>
                </View>
                <Image source={require('../../../assets/images/unnamed.png')} style={styles.imageLine}/>
                <View style={styles.otherCircle}>
                    <Text style={styles.otherTextCircle}>4</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', marginRight:'20%', marginTop:'2%'}}>
                <Text style={styles.intakeText}>Patient{'\n'}Intake</Text>
                <Text style={styles.assessment}>Patient{'\n'}Assessment</Text>
                <Text style={styles.assessment}>Patient{'\n'}Connectivity</Text>
                <Text style={styles.otherText}>Patient{'\n'}Connect</Text>
            </View>
            <ScrollView style={styles.patientConnectivityForm}>
                <Text style={styles.ConfirmationText}>Your nurse will be calling {'\n'}you shortly.</Text>
                <View style={styles.phoneBackground}>
                    <Image source={require('../../../assets/images/call.png')} style={styles.logo}/>
                    <Text style={styles.logoText}>Estimated Provider callback time</Text>
                    <View style={styles.time}>
                        <Text style={styles.timeText}>About 30 min</Text>
                    </View>
                </View>
                <Text style={styles.visitText}>
                    During the visit with your nurse, they will need {'\n'}to ask a few more questions to fully understand {'\n'}your situation. Please be in a quiet place without {'\n'}distractions to optimize the time with them. 
                </Text>
                <Text style={styles.emailText}>We will send updates to your email</Text>
                <TextInput 
                    style={styles.headerInput} 
                    placeholder='Enter Email' 
                    placeholderTextColor={Colors.placeholderColor}
                    keyboardType='email-address'
                />
                <CustomButton 
                        title='HOME SCREEN' 
                        style={styles.nextButton} 
                        styleButtonText={styles.nextText} 
                        onSelect={()=>props.navigation.navigate('Home')}
                    />
            </ScrollView>
        </View>
    );
};

export const screenOptions= navData => {
    return{
        headerShown: false
    };
};

const styles = StyleSheet.create({
    intakeCircle:{
        borderRadius:100,
        borderColor:Colors.primaryColor,
        borderWidth:2,
        padding:10,
        marginTop:'10%',
        paddingHorizontal:20,
        marginLeft:'2%'
    },
    textCircle:{
        fontSize:17,
        color:'#FF4500',
        color:Colors.primaryColor,
        fontFamily:'FiraSans-SemiBold'
    },
    imageLine:{
        width:'15%',
        height:'105%', 
        marginTop:'5%', 
    },
    otherCircle:{
        borderRadius:100,
        borderColor:'#FF4500',
        borderWidth:2,
        padding:10,
        marginTop:'10%',
        paddingHorizontal:20
    },
    assessmentCircle:{
        borderRadius:100,
        borderColor:Colors.primaryColor,
        borderWidth:2,
        padding:10,
        marginTop:'10%',
        paddingHorizontal:20
    },
    assessmentText:{
        fontSize:17,
        color:Colors.primaryColor,
        fontFamily:'FiraSans-SemiBold'
    },
    otherTextCircle:{
        fontSize:17,
        color:'#FF4500',
        fontFamily:'FiraSans-SemiBold'
    },
    intakeText:{
        color:Colors.primaryColor, 
        fontFamily:'FiraSans-SemiBold', 
        fontSize:17, 
        textAlign:'center',
        marginLeft:'2.5%'
    },
    assessment:{
        color:Colors.primaryColor, 
        fontFamily:'FiraSans-SemiBold', 
        fontSize:17,
        textAlign:'center',
        marginLeft:30
    },
    otherText:{
        color:'#FF4500', 
        fontFamily:'FiraSans-SemiBold', 
        fontSize:17,
        textAlign:'center',
        marginLeft:30,
    },
    patientConnectivityForm:{
        width:'92%',
        height:'78%',
        backgroundColor:Colors.formColor,
        marginLeft:Dimensions.get('window').width / 25,
        elevation:15,
        marginTop:'5%',
        borderRadius:10,
    },
    ConfirmationText:{
        fontFamily:'Gilroy-Bold',
        fontSize:25,
        marginLeft:'6%',
        marginTop:'7%'
    },
    phoneBackground:{
        borderColor:'gray',
        borderWidth:1,
        backgroundColor:'#F0F0F0',
        borderRadius:10,
        paddingVertical:'10%',
        marginHorizontal:'6%',
        marginTop:'6%'
    },
    logo:{
        alignSelf:'center'
    },
    logoText:{
        color:'gray',
        fontSize:20,
        fontFamily:'Gilroy-Bold',
        textAlign:'center'
    },
    time:{
        height:60,
        width:200,
        backgroundColor:'white',
        borderColor:Colors.lightGray,
        borderRadius:7,
        borderWidth:1,
        marginLeft:'20%',
        marginTop:'7%'
    },
    timeText:{
        fontFamily:'FiraSans-SemiBold',
        fontSize:25,
        marginVertical:'4%',
        marginHorizontal:'10%'
    },
    visitText:{
        fontSize:16.5,
        fontFamily:'FiraSans-MediumItalic',
        textAlign:'center',
        marginTop:'5%'
    },
    emailText:{
        marginTop:'10%',
        fontSize:18,
        fontFamily:'Gilroy-Bold',
        marginLeft:'5%'
    },
    headerInput:{
        borderBottomColor:Colors.lightGray,
        borderBottomWidth: 3,
        width:'80%',
        marginLeft:Dimensions.get('window').width / 22,
        fontSize: 14,
        marginTop:10,
        //marginBottom:15
    },
    nextButton:{
        backgroundColor:Colors.primaryColor,
        height:55,
        width:300,
        borderRadius:5,
        marginLeft:'10%',
        marginVertical:"10%"
    },
    nextText:{
        color:'white'
    }
});

export default AppointmentScreen;