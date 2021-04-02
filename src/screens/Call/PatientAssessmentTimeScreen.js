import React,{useState} from 'react';
import {View,Text,TextInput,Image,StyleSheet,Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../constants/Colors';
import CustomRedioButton from '../../components/CustomRedioButton';
import CustomButton from '../../components/CustomButton';

const PatientAssessmentTimeScreen = ({navigation,route}) => {
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
                    <Text style={styles.headerText}>When did you notice your problem?</Text>
                </View>
                <View>
                    <View style={styles.durationBox}>
                        <View style={styles.redioButton}>
                            <CustomRedioButton
                                onViewable={()=>setSelectedButton('under24')}
                                redioStyle={{backgroundColor:selectedButton==='under24' ? Colors.primaryColor:'#e1f5f5'}}
                            />
                        </View>
                        <Text style={styles.durationText}>{illnessduration.time1}</Text>
                    </View>
                    <View style={styles.durationBox}>
                        <View style={styles.redioButton}>
                            <CustomRedioButton
                                onViewable={()=>setSelectedButton('1-3')}
                                redioStyle={{backgroundColor:selectedButton==='1-3' ? Colors.primaryColor:'#e1f5f5'}}
                            />  
                        </View>
                        <Text style={styles.durationText}>{illnessduration.time2}</Text>
                    </View>
                    <View style={styles.durationBox}>
                        <View style={styles.redioButton}>
                            <CustomRedioButton
                                onViewable={()=>setSelectedButton('4-7')}
                                redioStyle={{backgroundColor:selectedButton==='4-7' ? Colors.primaryColor:'#e1f5f5'}}
                            />
                        </View>
                        <Text style={styles.durationText}>{illnessduration.time3}</Text>
                    </View>
                    <View style={styles.durationBox}>
                        <View style={styles.redioButton}>
                            <CustomRedioButton
                                onViewable={()=>setSelectedButton('1-2')}
                                redioStyle={{backgroundColor:selectedButton==='1-2' ? Colors.primaryColor:'#e1f5f5'}}
                            />
                        </View>
                        <Text style={styles.durationText}>{illnessduration.time4}</Text>
                    </View>
                    <View style={styles.durationBox}>
                        <View style={styles.redioButton}>
                            <CustomRedioButton
                                onViewable={()=>setSelectedButton('1')}
                                redioStyle={{backgroundColor:selectedButton==='1' ? Colors.primaryColor:'#e1f5f5'}}
                            />
                        </View>
                        <Text style={styles.durationText}>{illnessduration.time5}</Text>
                    </View>
                    <View style={styles.durationBox}>
                        <View style={styles.redioButton}>
                            <CustomRedioButton
                                onViewable={()=>setSelectedButton('months')}
                                redioStyle={{backgroundColor:selectedButton==='months' ? Colors.primaryColor:'#e1f5f5'}}
                            />
                        </View>
                        <Text style={styles.durationText}>{illnessduration.time6}</Text>
                    </View>
                    <View style={styles.durationBox}>
                        <View style={styles.redioButton}>
                            <CustomRedioButton
                                onViewable={()=>setSelectedButton('year')}
                                redioStyle={{backgroundColor:selectedButton==='year' ? Colors.primaryColor:'#e1f5f5'}}
                            />
                        </View>
                        <Text style={styles.durationText}>{illnessduration.time7}</Text>
                    </View>
                    <View style={styles.button}>
                        <CustomButton title='BACK' style={styles.backButton} styleButtonText={styles.backText} onSelect={()=>navigation.goBack()}/>
                        <CustomButton 
                            title='NEXT' 
                            style={styles.nextButton} 
                            styleButtonText={styles.nextText} 
                            onSelect={()=>
                                navigation.navigate('PatientAssessmentFeel',{
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
        height:550,
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

export default PatientAssessmentTimeScreen;