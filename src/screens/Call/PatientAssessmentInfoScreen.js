import React from 'react';
import {View,Text,TextInput,Image,StyleSheet,Dimensions,ScrollView} from 'react-native';
import Colors from '../../constants/Colors';
import CustomButton from '../../components/CustomButton';

const PatientAssessmentInfoScreen = props => {
    return(
        <View style={{flex:1}}>
            <View style={{flexDirection:'row'}}>
                <View style={styles.intakeCircle}>
                    <Text style={styles.textCircle}>1</Text>
                </View>
                <Image source={require('../../../assets/images/unnamed.png')} style={styles.imageLine}/>
                <View style={styles.patientCircle}>
                    <Text style={styles.patientTextCircle}>2</Text>
                </View>
                <Image source={require('../../../assets/images/unnamed.png')} style={styles.imageLine}/>
                <View style={styles.otherCircle}>
                    <Text style={styles.otherTextCircle}>3</Text>
                </View>
                <Image source={require('../../../assets/images/unnamed.png')} style={styles.imageLine}/>
                <View style={styles.otherCircle}>
                    <Text style={styles.otherTextCircle}>4</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', marginRight:'20%', marginTop:'2%'}}>
                <Text style={styles.intakeText}>Patient{'\n'}Intake</Text>
                <Text style={styles.patientText}>Patient{'\n'}Assessment</Text>
                <Text style={styles.otherText}>Patient{'\n'}Connectivity</Text>
                <Text style={styles.otherText}>Patient{'\n'}Connect</Text>
            </View>
            <View style={styles.patientAssessmentForm}>
                <View style={styles.headerFormat}>
                    <View style={styles.circle}></View>
                    <Text style={styles.headerText}>Is there any other information you would like to share with your nurse?</Text>
                </View>
                <View style={styles.information}>
                    <TextInput placeholder='Please enter other information...' placeholderTextColor='#C0C0C0'/>
                </View>
                <View style={styles.button}>
                    <CustomButton title='BACK' style={styles.backButton} styleButtonText={styles.backText} onSelect={()=>props.navigation.goBack()}/>
                    <CustomButton 
                        title='NEXT' 
                        style={styles.nextButton} 
                        styleButtonText={styles.nextText} 
                        onSelect={()=>
                            props.navigation.navigate('PatientConnectivity')
                        }
                    />
                </View>
            </View>
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
    patientTextCircle:{
        fontSize:17,
        color:'#FF4500',
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
    otherText:{
        color:'gray', 
        fontFamily:'FiraSans-SemiBold', 
        fontSize:17,
        textAlign:'center',
        marginLeft:30,
    },
    patientAssessmentForm:{
        height:380,
        width:'85%',
        backgroundColor:Colors.formColor,
        marginLeft:Dimensions.get('window').width / 13,
        //flex:1,
        elevation:15,
        marginTop:'5%',
        borderRadius:10,
    },
    headerFormat:{
        flexDirection:'row',
        marginVertical:20,
        marginLeft:10,
        marginTop:'10%'
    },
    circle:{
        borderRadius:50,
        padding:8,        
        backgroundColor:Colors.primaryColor,
        marginRight:13,
        marginBottom:22,
        marginTop:5
    },
    headerText:{
        fontFamily:'Gilroy-Bold',
        fontSize:18,
        marginTop:2,
        marginRight:'2.5%'
    },
    informationTextInput:{
        color:'black',
        borderColor:'#C0C0C0',
        borderWidth:1,
        borderRadius:10,
        paddingLeft:15,
        paddingBottom:'5%'
    },
    information:{
        backgroundColor:'white',
        //marginHorizontal:'3%',
        borderRadius:10,
        borderWidth:1,
        paddingBottom:50,
        marginHorizontal:25
    },
    button:{
        flexDirection:'row',
        marginLeft:'5%',
        marginTop:'20%',
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
    },
    backText:{
        color:'gray'
    },
    nextText:{
        color:'white'
    }
});

export default PatientAssessmentInfoScreen;