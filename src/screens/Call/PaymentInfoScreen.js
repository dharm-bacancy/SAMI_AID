import React,{useState} from 'react';
import {View,Text,TextInput,Image,StyleSheet,Dimensions,ScrollView,TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import CustomButton from '../../components/button/CustomButton';
import Icon from 'react-native-vector-icons/Entypo';
import CheckBox from '@react-native-community/checkbox';

const PaymentInfoScreen = props => {
    const [add, setAdd] = useState(false);
    const [term, setTerm] = useState(false);
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
                <Text style={styles.paymentText}>Payment Information</Text>
                <ScrollView style={styles.billForm}>
                    <Text style={styles.billText}>Billing Details</Text>
                    <View>
                        <View style={styles.nameForm}>
                            <Text style={styles.nameText}>First Name</Text>
                            <Icon name='star-outlined' size={13} color='red' style={styles.icon}/>
                        </View>
                        <View style={styles.textInputView}>
                        <TextInput
                            placeholder='Enter First Name'
                            keyboardType='default'
                        />
                        </View>
                        <View style={styles.nameForm}>
                            <Text style={styles.nameText}>Last Name</Text>
                            <Icon name='star-outlined' size={13} color='red' style={styles.icon}/>
                        </View>
                        <View style={styles.textInputView}>
                        <TextInput
                            placeholder='Enter Last Name'
                            keyboardType='default'
                        />
                        </View>
                        <View style={styles.nameForm}>
                            <Text style={styles.nameText}>Zip Code</Text>
                            <Icon name='star-outlined' size={13} color='red' style={styles.icon}/>
                        </View>
                        <View style={styles.textInputView}>
                        <TextInput
                            placeholder='Enter Zip Code'
                            keyboardType='numeric'
                            maxLength={6}
                        />
                        </View>
                        <View style={styles.nameForm}>
                            <Text style={styles.nameText}>City</Text>
                            <Icon name='star-outlined' size={13} color='red' style={styles.icon}/>
                        </View>
                        <View style={styles.textInputView}>
                        <TextInput
                            placeholder='Enter City'
                            keyboardType='default'
                        />
                        </View>
                        <View style={styles.nameForm}>
                            <Text style={styles.nameText}>State</Text>
                            <Icon name='star-outlined' size={13} color='red' style={styles.icon}/>
                        </View>
                        <View style={styles.textInputView}>
                        <TextInput
                            placeholder='Enter State'
                            keyboardType='default'
                        />
                        </View>
                        <View style={styles.nameForm}>
                            <Text style={styles.nameText}>Billing Email</Text>
                            <Icon name='star-outlined' size={13} color='red' style={styles.icon}/>
                        </View>
                        <View style={styles.textInputView}>
                        <TextInput
                            placeholder='Enter Billing Email'
                            keyboardType='email-address'
                        />
                        </View>
                        <View style={styles.checkBoxForm}>
                            <CheckBox
                                value={add}
                                onValueChange={setAdd}
                                tintColors={{true: Colors.primaryColor, false:'gray'}}
                                style={styles.checkBox}
                            />
                            <Text style={styles.checkBoxText}>Billing Address same as Profile Address</Text>
                        </View>
                        <View style={styles.checkBoxForm}>
                            <CheckBox
                                value={term}
                                onValueChange={setTerm}
                                tintColors={{true: Colors.primaryColor, false:'gray'}}
                                style={styles.checkBox}
                            />
                            <View style={{flexDirection:'column'}}>
                                <Text style={styles.term}>By clicking Countinue, I agree to the</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={styles.termText}>Terms & Conditions</Text>
                                    <Text style={{fontSize:15, fontFamily:'Gilroy-Bold'}}> set out by this site.</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.nameForm}>
                            <Text style={styles.nameText}>Card Holder Name</Text>
                            <Icon name='star-outlined' size={13} color='red' style={styles.icon}/>
                        </View>
                        <View style={styles.cardView}>
                        <TextInput
                            placeholder='Enter Card holder Name'
                            keyboardType='default'
                        />
                        </View>
                        <View style={styles.nameForm}>
                            <Text style={styles.nameText}>Card Number</Text>
                            <Icon name='star-outlined' size={13} color='red' style={styles.icon}/>
                        </View>
                        <View style={styles.cardView}>
                        <TextInput
                            placeholder='Enter Card Number'
                            keyboardType='numeric'
                            maxLength={12}
                        />
                        </View>
                        <View style={styles.nameForm}>
                            <Text style={styles.nameText}>Expiration Date</Text>
                            <Icon name='star-outlined' size={13} color='red' style={styles.icon}/>
                        </View>
                        <View style={styles.cardView}>
                        <TextInput
                            placeholder='MM/YY'
                            keyboardType='numeric'
                            maxLength={4}
                        />
                        </View>
                        <View style={styles.nameForm}>
                            <Text style={styles.nameText}>Security Code</Text>
                            <Icon name='star-outlined' size={13} color='red' style={styles.icon}/>
                        </View>
                        <View style={{...styles.cardView,...styles.securityCode}}>
                        <TextInput
                            placeholder='CVV'
                            keyboardType='numeric'
                            maxLength={3}
                            secureTextEntry
                        />
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.button}>
                    <CustomButton title='BACK' style={styles.backButton} styleButtonText={styles.backText} onSelect={()=>props.navigation.goBack()}/>
                    <CustomButton 
                        title='NEXT' 
                        style={styles.nextButton} 
                        styleButtonText={styles.nextText} 
                        onSelect={()=>props.navigation.navigate('Confirmation')}
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
        height:'78%',
        backgroundColor:Colors.formColor,
        marginLeft:Dimensions.get('window').width / 25,
        elevation:15,
        marginTop:'5%',
        borderRadius:10,
    },
    paymentText:{
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
    nameForm:{
        flexDirection:'row',
        marginLeft:'5%',
        marginTop:'5%'
    },
    nameText:{
        fontSize:17,
        fontFamily:'Gilroy-Bold'
    },
    icon:{
        marginLeft:'1.5%',
        marginTop:3.5
    },
    textInputView:{
        borderRadius:10,
        borderWidth:1,
        backgroundColor:'#F0F0F0',
        marginRight:'6%',
        marginLeft:'4%',
        marginTop:'3%'
    },
    checkBoxForm:{
        flexDirection:'row',
        marginTop:'5%',
        marginLeft:'3%',
    },
    checkBox:{
        transform:[{scaleX:1.4}, {scaleY:1.4}],
    },
    checkBoxText:{
        marginTop:'2%',
        fontSize:15,
        fontFamily:'Gilroy-Bold',
        marginLeft:'1.5%'
    },
    termText:{
        color:Colors.primaryColor,
        fontFamily:'Gilroy-Bold',
        fontSize:15,
        marginLeft:'1.5%'
    },
    term:{
        fontSize:15,
        fontFamily:'Gilroy-Bold',
        marginLeft:'1.5%',
    },
    cardView:{
        borderRadius:10,
        borderWidth:1,
        backgroundColor:'white',
        marginRight:'6%',
        marginLeft:'4%',
        marginTop:'3%'
    },
    securityCode:{
        marginBottom:'7%'
    },
    button:{
        flexDirection:'row',
        marginLeft:'7%',
        marginTop:'10%',
        marginBottom:'10%'
    },
    backButton:{
        backgroundColor:Colors.formColor,
        height:55,
        width:150,
        borderRadius:5,
        marginRight:'2.5%',
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

export default PaymentInfoScreen;