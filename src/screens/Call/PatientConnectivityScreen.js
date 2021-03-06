import React from 'react';
import {View,Text,TextInput,Image,StyleSheet,Dimensions,ScrollView,TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import CustomButton from '../../components/button/CustomButton';
import Icon from 'react-native-vector-icons/AntDesign';

const PatientConnectivityScreen = props =>{
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
                <View style={styles.patientCircle}>
                    <Text style={styles.patientTextCircle}>3</Text>
                </View>
                <Image source={require('../../../assets/images/unnamed.png')} style={styles.imageLine}/>
                <View style={styles.otherCircle}>
                    <Text style={styles.otherTextCircle}>4</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', marginRight:'20%', marginTop:'2%'}}>
                <Text style={styles.intakeText}>Patient{'\n'}Intake</Text>
                <Text style={styles.assessment}>Patient{'\n'}Assessment</Text>
                <Text style={styles.patientText}>Patient{'\n'}Connectivity</Text>
                <Text style={styles.otherText}>Patient{'\n'}Connect</Text>
            </View>
            <ScrollView style={styles.patientConnectivityForm}>
                <Text style={styles.headerText}>
                    Dharm, let's get you {'\n'}taken care of: {'\n'}You're almost to the {'\n'}nurse's office
                </Text>
                <View style={styles.phoneBackground}>
                    <Image source={require('../../../assets/images/call.png')} style={styles.logo}/>
                    <Text style={styles.logoText}>PHONE</Text>
                </View>
                <TouchableOpacity style={styles.promoCode}>
                    <Icon name='tag' color={Colors.primaryColor} size={21}/>
                    <Text style={styles.promoText}>Have a Promo Code?</Text>
                </TouchableOpacity>
                <Text style={styles.belowText}>What's the best number to reach at you during your visit?</Text>
                <View>
                    <Text style={styles.phoneText}>Phone Number</Text>
                    <View style={styles.textInputView}>
                        <TextInput
                            placeholder='Cell Phone'
                            keyboardType='numeric'
                            maxLength={10}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.phoneText}>Email Address</Text>
                    <View style={styles.textInputView}>
                        <TextInput
                            placeholder='Enter Email'
                            keyboardType='email-address'
                        />
                    </View>
                </View>
                <View style={styles.button}>
                    <CustomButton title='BACK' style={styles.backButton} styleButtonText={styles.backText} onSelect={()=>props.navigation.goBack()}/>
                    <CustomButton 
                        title='NEXT' 
                        style={styles.nextButton} 
                        styleButtonText={styles.nextText} 
                        onSelect={()=>props.navigation.navigate('PaymentInfo')}
                    />
                </View>
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
    patientCircle:{
        borderRadius:100,
        borderColor:'#FF4500',
        borderWidth:2,
        padding:10,
        marginTop:'10%',
        paddingHorizontal:20
    },
    otherCircle:{
        borderRadius:100,
        borderColor:'gray',
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
    patientTextCircle:{
        fontSize:17,
        color:'#FF4500',
        fontFamily:'FiraSans-SemiBold'
    },
    assessmentText:{
        fontSize:17,
        color:Colors.primaryColor,
        fontFamily:'FiraSans-SemiBold'
    },
    otherTextCircle:{
        fontSize:17,
        color:'gray',
        fontFamily:'FiraSans-SemiBold'
    },
    intakeText:{
        color:Colors.primaryColor, 
        fontFamily:'FiraSans-SemiBold', 
        fontSize:17, 
        textAlign:'center',
        marginLeft:'2.5%'
    },
    patientText:{
        color:'#FF4500', 
        fontFamily:'FiraSans-SemiBold', 
        fontSize:17,
        textAlign:'center',
        marginLeft:30
    },
    assessment:{
        color:Colors.primaryColor, 
        fontFamily:'FiraSans-SemiBold', 
        fontSize:17,
        textAlign:'center',
        marginLeft:30
    },
    otherText:{
        color:'gray', 
        fontFamily:'FiraSans-SemiBold', 
        fontSize:17,
        textAlign:'center',
        marginLeft:30,
    },
    patientConnectivityForm:{
        width:'92%',
        backgroundColor:Colors.formColor,
        marginLeft:Dimensions.get('window').width / 25,
        elevation:15,
        marginTop:'5%',
        borderRadius:10,
    },
    headerText:{
        fontFamily:'Gilroy-Bold',
        fontSize:23,
        margin:'7%',
    },
    phoneBackground:{
        borderColor:'gray',
        borderWidth:1,
        backgroundColor:'#F0F0F0',
        borderRadius:10,
        paddingVertical:'10%',
        marginHorizontal:'6%'  
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
    promoCode:{
        flexDirection:'row',
        marginTop:'5%',
        marginLeft:'7%'
    },
    promoText:{
        color:Colors.primaryColor,
        marginLeft:'3%',
        fontSize:17,
        fontFamily:'Gilroy-Medium'
    },
    belowText:{
        marginHorizontal:'6%',
        marginTop:'6%',
        fontSize:16,
        fontFamily:'Gilroy-Bold'
    },
    phoneText:{
        color:'gray',
        fontFamily:'Gilroy-Bold',
        fontSize:17,
        marginLeft:'6%',
        marginTop:'4%',
        marginBottom:'3%'
    },
    textInputView:{
        borderRadius:10,
        borderWidth:1,
        backgroundColor:'white',
        //paddingHorizontal:'3%'
        marginHorizontal:'6%'
    },
    button:{
        flexDirection:'row',
        marginLeft:'5%',
        marginTop:'10%',
        marginBottom:'10%'
    },
    backButton:{
        backgroundColor:Colors.formColor,
        height:55,
        width:150,
        borderRadius:5,
        marginRight:'5%',
        borderColor:Colors.lightGray,
        borderWidth:2
    },
    nextButton:{
        backgroundColor:Colors.primaryColor,
        height:55,
        width:150,
        borderRadius:5,
        marginLeft:'10%'
    },
    backText:{
        color:'gray'
    },
    nextText:{
        color:'white'
    }
});

export default PatientConnectivityScreen;