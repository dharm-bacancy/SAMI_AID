import React,{useState} from 'react';
import {View,Text,TextInput,Image,StyleSheet,Dimensions,ScrollView,TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import CustomButton from '../../components/button/CustomButton';
import CheckBox from '@react-native-community/checkbox';

const ConfirmationScreen = props => {
    const [selectedCat, setSelectedCat] = useState('');
    const [term,setTerm] = useState(false);
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
                <Text style={styles.ConfirmationText}>Confirmation</Text>
                <ScrollView style={styles.billForm}>
                    <Text style={styles.billText}>Please confirm your session details</Text>
                    <View style={styles.detailsModel}>
                        <Text style={styles.detailText}>Provider:</Text>
                        <Text style={styles.detailText}>Provider on Call</Text>
                        <Text style={styles.detailText}>Provider Type:</Text>
                        <Text style={styles.detailText}>General Practice</Text>
                        <Text style={styles.detailText}>Reason for Visit:</Text>
                        <Text style={styles.detailText}>Rash</Text>
                        <Text style={styles.detailText}>Consulting Method:</Text>
                        <Text style={styles.detailText}>Phone</Text>
                        <Text style={styles.detailText}>Payment Amount:</Text>
                        <Text style={styles.detailText}>$0</Text>
                    </View>
                    <Text style={styles.detailText}>If SAMI-Aid was not available, where would have you gone?</Text>
                    <View style={styles.cardView}>
                        <TextInput
                            keyboardType='default'
                        />
                    </View>
                    <Text style={styles.detailText}>Do you have a Primary Care Physician?</Text>
                    <View style={styles.permissionButton}>
                        <CustomButton 
                            title='YES' 
                            style={{...styles.yesButton,backgroundColor:selectedCat==='yes'? Colors.primaryColor:'white'}} 
                            styleButtonText={{...styles.buttonText,color:selectedCat==='yes' ? 'white':'black'}}
                            onSelect={()=>setSelectedCat('yes')}
                        />
                        <CustomButton 
                            title='NO' 
                            style={{...styles.noButton, backgroundColor:selectedCat==='no'?Colors.primaryColor:'white'}} 
                            styleButtonText={{...styles.buttonText,color:selectedCat==='no'?'white':'black'}}
                            onSelect={()=>setSelectedCat('no')}
                        />
                    </View>
                    <View style={styles.termForm}>
                        <CheckBox
                            value={term}
                            onValueChange={setTerm}
                            tintColors={{true: Colors.primaryColor, false:'gray'}}
                            style={styles.checkBox}
                        />
                        <View>
                            <Text style={{fontFamily:'Gilroy-Bold', fontSize:16}}>By clicking here, I acknowledge that I {'\n'}accept and agree to SAMI-Aid's</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontFamily:'Gilroy-Bold', fontSize:17, color:Colors.primaryColor}}>Term & Conditions</Text>
                                <Text style={{fontSize:17, fontFamily:'Gilroy-Bold'}}> and </Text>
                                <Text style={{fontFamily:'Gilroy-Bold', fontSize:17, color:Colors.primaryColor}}>Privacy Policy</Text>
                            </View>
                        </View>
                    </View>
                    <CustomButton title='BACK' style={styles.backButton} styleButtonText={styles.backText} onSelect={()=>props.navigation.goBack()}/>
                    <CustomButton 
                        title='CREATE APPOINTMENT' 
                        style={styles.nextButton} 
                        styleButtonText={styles.nextText} 
                        onSelect={()=>props.navigation.navigate('Appointment')}
                    />
                </ScrollView>
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
    billForm:{
        width:'88%',
        backgroundColor:'white',
        elevation:15,
        marginTop:'5%',
        borderRadius:10,
        marginLeft:'6%'
    },
    billText:{
        marginLeft:'5%',
        marginTop:'5%',
        fontSize:23,
        fontFamily:'Gilroy-Bold'
    },
    detailsModel:{
        borderColor:'silver',
        borderWidth:1,
        borderRadius:8,
        height:300,
        width:300,
        margin:16,
        paddingTop:10
    },
    detailText:{
        marginLeft:15,
        fontFamily:'FiraSans-SemiBold',
        fontSize:17
    },
    cardView:{
        borderRadius:10,
        borderWidth:1,
        backgroundColor:'white',
        marginRight:'6%',
        marginLeft:'4%',
        marginTop:'3%',
        marginBottom:'8%',
        borderColor:'gray'
    },
    permissionButton:{
        flexDirection:'row',
        marginLeft:'10%',
        marginTop:'10%'
    },
    yesButton:{
        backgroundColor:'white',
        height:48,
        width:130,
        borderRadius:5,
        borderColor:Colors.primaryColor,
        borderWidth:1,
        overflow:'hidden'
    },
    noButton:{
        backgroundColor:'white',
        height:48,
        width:130,
        borderRadius:5,
        borderColor:Colors.primaryColor,
        borderWidth:1,
        overflow:'hidden'
    },
    buttonText:{
        color:'black'
    },
    termForm:{
        flexDirection:'row',
        marginTop:'5%'
    },
    checkBox:{
        transform:[{scaleX:1.4}, {scaleY:1.4}],
        marginTop:'5%',
        marginLeft:'2%',
        marginRight:'1%'
    },
    backButton:{
        backgroundColor:'white',
        height:55,
        width:200,
        borderRadius:7,
        borderColor:'gray',
        borderWidth:2,
        marginTop:'10%',
        marginLeft:'5%'
    },
    backText:{
        color:'gray'
    },
    nextButton:{
        backgroundColor:Colors.primaryColor,
        height:55,
        width:300,
        borderRadius:5,
        marginLeft:'5%',
        marginVertical:"10%"
    },
    nextText:{
        color:'white'
    }
});

export default ConfirmationScreen;