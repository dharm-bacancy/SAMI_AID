import React,{useState} from 'react';
import {View,Text,TextInput,Image,StyleSheet,Dimensions,ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../constants/Colors';
import CustomRedioButton from '../../components/CustomRedioButton';
import CustomButton from '../../components/CustomButton';
import CheckBox from '@react-native-community/checkbox';

const PatientAssessmentSymptomsScreen = ({navigation,route}) =>{
    const [sym1, setSym1] = useState(false);
    const [sym2, setSym2] = useState(false);
    const [sym3, setSym3] = useState(false);
    const [sym4, setSym4] = useState(false);
    const [sym5, setSym5] = useState(false);
    const [sym6, setSym6] = useState(false);
    const [sym7, setSym7] = useState(false);
    const [sym8, setSym8] = useState(false);
    const [sym9, setSym9] = useState(false);
    const [sym10, setSym10] = useState(false);
    const [sym11, setSym11] = useState(false);
    const [sym12, setSym12] = useState(false);
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
                <ScrollView>
                    <View style={styles.headerFormat}>
                        <View style={styles.circle}></View>
                        <Text style={styles.headerText}>What are your symptoms like (select all that apply?)</Text>
                    </View>
                    <View>
                    <View style={styles.durationBox}>
                        <CheckBox 
                            value={sym1} 
                            onValueChange={setSym1} 
                            tintColors={{true: Colors.primaryColor, false:'black'}}
                            style={styles.checkBox}
                        />
                        <Text style={styles.durationText}>{illnessduration.s1}</Text>
                    </View>
                    <View style={styles.durationBox}>
                        <CheckBox 
                            value={sym2} 
                            onValueChange={setSym2} 
                            tintColors={{true: Colors.primaryColor, false:'black'}}
                            style={styles.checkBox}
                        />
                        <Text style={styles.durationText}>{illnessduration.s2}</Text>
                    </View>
                    <View style={styles.durationBox}>
                        <CheckBox 
                            value={sym3} 
                            onValueChange={setSym3} 
                            tintColors={{true: Colors.primaryColor, false:'black'}}
                            style={styles.checkBox}
                        />
                        <Text style={styles.durationText}>{illnessduration.s3}</Text>
                    </View>
                    <View style={styles.durationBox}>
                        <CheckBox 
                            value={sym4} 
                            onValueChange={setSym4} 
                            tintColors={{true: Colors.primaryColor, false:'black'}}
                            style={styles.checkBox}
                        />
                        <Text style={styles.durationText}>{illnessduration.s4}</Text>
                    </View>
                    {/* {illnessId === 'p1' && 'p2' && 'p3' && 'p4' && 'p5' && 'p6' && 'p7' && 'p8' && 'p9' && 'p10' && 'p11' && 'p13' && 'p14' && 'p15' ?
                        <View style={styles.durationBox}>
                        <CheckBox 
                            value={sym5} 
                            onValueChange={setSym5} 
                            tintColors={{true: Colors.primaryColor, false:'black'}}
                            style={styles.checkBox}
                        />
                        <Text style={styles.durationText}>{illnessduration.s5}</Text>
                    </View>
                    :null} */}
                    {illnessId !== 'p12' && illnessId !== 'p16' ?
                        <View style={styles.durationBox}>
                        <CheckBox 
                            value={sym5} 
                            onValueChange={setSym5} 
                            tintColors={{true: Colors.primaryColor, false:'black'}}
                            style={styles.checkBox}
                        />
                        <Text style={styles.durationText}>{illnessduration.s5}</Text>
                    </View>
                    :null}
                    {illnessId !== 'p12' && illnessId !== 'p16' ?
                        <View style={styles.durationBox}>
                        <CheckBox 
                            value={sym6} 
                            onValueChange={setSym6} 
                            tintColors={{true: Colors.primaryColor, false:'black'}}
                            style={styles.checkBox}
                        />
                        <Text style={styles.durationText}>{illnessduration.s6}</Text>
                    </View>
                    :null}
                    {illnessId !== 'p12' && illnessId !== 'p16' && illnessId !== 'p2' ?
                        <View style={styles.durationBox}>
                        <CheckBox 
                            value={sym7} 
                            onValueChange={setSym7} 
                            tintColors={{true: Colors.primaryColor, false:'black'}}
                            style={styles.checkBox}
                        />
                        <Text style={styles.durationText}>{illnessduration.s7}</Text>
                    </View>
                    :null}
                    {illnessId !== 'p1' && illnessId !== 'p2' && illnessId !== 'p3' && illnessId !== 'p6' && illnessId !== 'p9' && illnessId !== 'p12' && illnessId !== 'p14' && illnessId !== 'p16' ?
                    // {illnessId === 'p4' && 'p5' && 'p7' && 'p8' && 'p10' && 'p11' && 'p13' && 'p15' ?
                        <View style={styles.durationBox}>
                        <CheckBox 
                            value={sym8} 
                            onValueChange={setSym8} 
                            tintColors={{true: Colors.primaryColor, false:'black'}}
                            style={styles.checkBox}
                        />
                        <Text style={styles.durationText}>{illnessduration.s8}</Text>
                    </View>
                    :null}
                    {illnessId !== 'p1' && illnessId !== 'p2' && illnessId !== 'p3' && illnessId !== 'p5' && illnessId !== 'p6' && illnessId !== 'p7' && illnessId !== 'p9' && illnessId !== 'p10' && illnessId !== 'p12' && illnessId !== 'p13' && illnessId !== 'p14' && illnessId !== 'p15' && illnessId !== 'p16' ?
                    // {illnessId == 'p4' && 'p8' && 'p11' ?
                        <View style={styles.durationBox}>
                        <CheckBox 
                            value={sym9} 
                            onValueChange={setSym9} 
                            tintColors={{true: Colors.primaryColor, false:'black'}}
                            style={styles.checkBox}
                        />
                        <Text style={styles.durationText}>{illnessduration.s9}</Text>
                    </View>
                    :null}
                    {illnessId === 'p8' ?
                        <View style={styles.durationBox}>
                        <CheckBox 
                            value={sym10} 
                            onValueChange={setSym10} 
                            tintColors={{true: Colors.primaryColor, false:'black'}}
                            style={styles.checkBox}
                        />
                        <Text style={styles.durationText}>{illnessduration.s10}</Text>
                    </View>
                    :null}
                    {illnessId === 'p8' ?
                        <View style={styles.durationBox}>
                        <CheckBox 
                            value={sym11} 
                            onValueChange={setSym11} 
                            tintColors={{true: Colors.primaryColor, false:'black'}}
                            style={styles.checkBox}
                        />
                        <Text style={styles.durationText}>{illnessduration.s11}</Text>
                    </View>
                    :null}
                    {illnessId === 'p8' ?
                        <View style={styles.durationBox}>
                        <CheckBox 
                            value={sym12} 
                            onValueChange={setSym12} 
                            tintColors={{true: Colors.primaryColor, false:'black'}}
                            style={styles.checkBox}
                        />
                        <Text style={styles.durationText}>{illnessduration.s12}</Text>
                    </View>
                    :null}
                    </View>
                    <View style={styles.button}>
                        <CustomButton title='BACK' style={styles.backButton} styleButtonText={styles.backText} onSelect={()=>navigation.goBack()}/>
                        <CustomButton 
                            title='NEXT' 
                            style={styles.nextButton} 
                            styleButtonText={styles.nextText} 
                            onSelect={()=>
                                navigation.navigate('PatientAssessmentInfo')
                            }
                        />
                    </View>
                </ScrollView>
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
    checkBox:{
        transform:[{scaleX:1.2}, {scaleY:1.2}],
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
    durationBox:{
        flexDirection:'row',
        marginBottom:'4%',
        marginLeft:'5%'
    },
    durationText:{
        fontFamily:'Gilroy-Bold',
        fontSize:18,
        marginTop:4,
        marginRight:'6.5%',
        marginLeft:'2%'
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

export default PatientAssessmentSymptomsScreen;