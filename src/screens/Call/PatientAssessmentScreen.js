import React,{useReducer} from 'react';
import {View,Text, TextInput,ImageBackground,Image,Dimensions,StyleSheet,FlatList,ScrollView} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import Colors from '../../constants/Colors';
import PatientAssessment from '../../components/PatientAssessment';
import CustomButton from '../../components/CustomButton';

const PatientAssessmentScreen = ({navigation,route}) =>{
    const illnessId = route.params.illnessId;
    const illnessDetail = useSelector(state =>
        state.illnesses.availableIllnesses.find(prod => prod.id === illnessId)
    );
    const illnesses = useSelector(state => state.illnesses.availableIllnesses);
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
            <ScrollView style={styles.patientAssessmentForm}>
                <PatientAssessment
                    detail={illnessDetail.description}
                    question={illnessDetail.question}
                />
                <View style={styles.permissionButton}>
                    <CustomButton title='YES' style={styles.yesButton} styleButtonText={styles.buttonText}/>
                    <CustomButton title='NO' style={styles.noButton} styleButtonText={styles.buttonText}/>
                </View>
                <View style={styles.button}>
                    <CustomButton title='BACK' style={styles.backButton} styleButtonText={styles.backText} onSelect={()=>navigation.goBack()}/>
                    <CustomButton 
                        title='NEXT' 
                        style={styles.nextButton} 
                        styleButtonText={styles.nextText} 
                        onSelect={()=>
                            navigation.navigate('PatientAssessmentTime',{
                                illnessId:illnessId
                            })
                        }
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
        height:'100%',
        width:'85%',
        backgroundColor:Colors.formColor,
        marginLeft:Dimensions.get('window').width / 13,
        flex:1,
        elevation:15,
        marginTop:'5%',
        borderRadius:10,
    },
    permissionButton:{
        flexDirection:'row',
        marginLeft:'5%',
        marginTop:'4%'
    },
    yesButton:{
        backgroundColor:Colors.lightGray,
        height:42,
        width:130,
        borderRadius:5,
        marginRight:'0.5%',
    },
    noButton:{
        backgroundColor:Colors.formColor,
        height:42,
        width:130,
        borderRadius:5,
        borderColor:Colors.lightGray,
        borderWidth:1
    },
    buttonText:{
        color:'black'
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
    },
    backText:{
        color:'gray'
    },
    nextText:{
        color:'white'
    }
});

export default PatientAssessmentScreen;