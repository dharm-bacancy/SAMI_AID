import React,{useState} from 'react';
import {View,Text,TextInput,Image,StyleSheet,Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../constants/Colors';
import CustomRedioButton from '../../components/button/CustomRedioButton';
import CustomButton from '../../components/button/CustomButton';

const PatientAssessmentFeelScreen = ({navigation,route}) => {
    const [selectedButton, setSelectedButton] = useState('');
    const illnessId = route.params.illnessId;
    const illnessduration = useSelector(state =>
        state.illnesses.availableIllnesses.find(prod => prod.id === illnessId)
    );
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
                    <Text style={styles.headerText}>How do you feel?</Text>
                </View>
                <View>
                    <View style={styles.durationBox}>
                        <View style={styles.redioButton}>
                            <CustomRedioButton
                                onViewable={()=>setSelectedButton('normal')}
                                redioStyle={{backgroundColor:selectedButton==='normal' ? Colors.primaryColor:'#e1f5f5'}}
                            />
                        </View>
                        <Text style={styles.durationText}>{illnessduration.feel1}</Text>
                    </View>
                    <View style={styles.durationBox}>
                        <View style={styles.redioButton}>
                            <CustomRedioButton
                                onViewable={()=>setSelectedButton('mild')}
                                redioStyle={{backgroundColor:selectedButton==='mild' ? Colors.primaryColor:'#e1f5f5'}}
                            />  
                        </View>
                        <Text style={styles.durationText}>{illnessduration.feel2}</Text>
                    </View>
                    <View style={styles.durationBox}>
                        <View style={styles.redioButton}>
                            <CustomRedioButton
                                onViewable={()=>setSelectedButton('noticeable')}
                                redioStyle={{backgroundColor:selectedButton==='noticeable' ? Colors.primaryColor:'#e1f5f5'}}
                            />
                        </View>
                        <Text style={styles.durationText}>{illnessduration.feel3}</Text>
                    </View>
                    <View style={styles.durationBox}>
                        <View style={styles.redioButton}>
                            <CustomRedioButton
                                onViewable={()=>setSelectedButton('severe')}
                                redioStyle={{backgroundColor:selectedButton==='severe' ? Colors.primaryColor:'#e1f5f5'}}
                            />
                        </View>
                        <Text style={styles.durationText}>{illnessduration.feel4}</Text>
                    </View>
                    <View style={styles.button}>
                        <CustomButton title='BACK' style={styles.backButton} styleButtonText={styles.backText} onSelect={()=>navigation.goBack()}/>
                        <CustomButton 
                            title='NEXT' 
                            style={styles.nextButton} 
                            styleButtonText={styles.nextText} 
                            onSelect={()=>
                                navigation.navigate('PatientAssessmentSymptoms',{
                                    illnessId:illnessId
                                })
                            }
                        />
                    </View>
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
        height:400,
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
        marginLeft:10
    },
    circle:{
        borderRadius:50,
        padding:7,
        backgroundColor:Colors.primaryColor,
        marginRight:10,
        marginVertical:7
    },
    headerText:{
        fontFamily:'Gilroy-Bold',
        fontSize:18,
        marginTop:2
    },
    redioButton:{
        borderRadius:200,
        borderColor:'black',
        borderWidth:2,
        paddingHorizontal:3.5,
        marginRight:'10%',
        marginLeft:'10%',
        marginBottom:'2%'
    },
    durationBox:{
        flexDirection:'row',
        marginBottom:'4%'
    },
    durationText:{
        fontFamily:'Gilroy-Bold',
        fontSize:18,
        marginTop:2
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

export default PatientAssessmentFeelScreen;