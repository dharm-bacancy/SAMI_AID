import React from 'react';
import {View,Text, TextInput,ImageBackground,Image,Dimensions,StyleSheet,FlatList,ScrollView} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import CustomButton from '../../components/CustomButton';
import Colors from '../../constants/Colors';
import PatientIntake from '../../components/PatientIntake';

const PatientIntakeScreen = props => {
    const illnesses = useSelector(state => state.illnesses.availableIllnesses);
    const dispatch = useDispatch();
    return(
        <View style={{flex:1}}>
            <ImageBackground source={require('../../../assets/images/shape.png')} style={styles.image}>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.intakeCircle}>
                        <Text style={styles.textCircle}>1</Text>
                    </View>
                    <Image source={require('../../../assets/images/unnamed.png')} style={styles.imageLine}/>
                    <View style={styles.otherCircle}>
                        <Text style={styles.otherTextCircle}>2</Text>
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
                    <Text style={styles.otherText}>Patient{'\n'}Assessment</Text>
                    <Text style={styles.otherText}>Patient{'\n'}Connectivity</Text>
                    <Text style={styles.otherText}>Patient{'\n'}Connect</Text>
                </View>
            </ImageBackground>
            <ScrollView style={styles.patientIntakeForm}>
                <Text style={styles.headerText}>Who needs help today?</Text>
                <Text style={styles.middleText}>Choose one of the following or search below</Text>
                <Text style={styles.belowText}>I am not feeling well because I have</Text>
                {/* <FlatList
                    data={illnesses}
                    keyExtractor={item=> item.id.toString()}
                    renderItem={itemData => (
                        <PatientIntake
                            illnessesName={itemData.item.name}
                            onViewDetail={()=>{
                                props.navigation.navigate('PatientAssessment', {
                                    illnessId: itemData.item.id,
                                    illnessName: itemData.item.name
                                })
                            }}
                        />
                    )}
                /> */}
                {
                    illnesses.map(item => {
                        return(
                            <PatientIntake 
                                key={item.name} 
                                illnessesName={item.name} 
                                onViewDetail={()=>{
                                    props.navigation.navigate('PatientAssessment', {
                                        illnessId: item.id,
                                        illnessName: item.name
                                    });
                                }}
                            />
                        )
                    })
                }
                <Text style={styles.textAliment}>Other Aliment:</Text>
                <View style={styles.alimentInput}>
                    <TextInput placeholder='Please enter other aliment...' placeholderTextColor='gray' maxLength={99}/>
                </View>
                <Text style={styles.limitationText}>Aliment must be less than 100 characters.</Text>
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
    image:{
        width:'100%',
        height:120,
        alignItems:'center'
    },
    intakeCircle:{
        borderRadius:100,
        borderColor:'#FF4500',
        borderWidth:2,
        padding:10,
        marginTop:'30%',
        paddingHorizontal:20
    },
    textCircle:{
        fontSize:17,
        color:'#FF4500',
        fontFamily:'FiraSans-SemiBold'
    },
    imageLine:{
        width:'15%',
        height:'65%', 
        marginTop:'22%', 
    },
    otherCircle:{
        borderRadius:100,
        borderColor:'gray',
        borderWidth:2,
        padding:10,
        marginTop:'30%',
        paddingHorizontal:20
    },
    otherTextCircle:{
        fontSize:17,
        color:'gray',
        fontFamily:'FiraSans-SemiBold'
    },
    intakeText:{
        color:'#FF4500', 
        fontFamily:'FiraSans-SemiBold', 
        fontSize:17, 
        textAlign:'center',
        marginLeft:'25%'
    },
    otherText:{
        color:'gray', 
        fontFamily:'FiraSans-SemiBold', 
        fontSize:17,
        textAlign:'center',
        marginLeft:30
    },
    patientIntakeForm:{
        height:'150%',
        width:'85%',
        backgroundColor:Colors.formColor,
        marginLeft:Dimensions.get('window').width / 13,
        flex:1,
        elevation:15,
        marginTop:'30%',
        borderRadius:10,
    },
    headerText:{
        fontSize:26,
        fontFamily:'FiraSans-SemiBold',
        marginTop:20,
        marginLeft:'10%'
    },
    middleText:{
        fontFamily:'Gilroy-Bold',
        fontSize:15,
        marginLeft:'6%',
        marginTop:'4%'
    },
    belowText:{
        fontFamily:'Gilroy-Bold',
        fontSize:15,
        marginTop:'4%',
        color:Colors.primaryColor,
        marginLeft:'13%'    
    },
    textAliment:{
        fontFamily:'Gilroy-Medium',
        fontSize:25,
        marginTop:45,
        marginLeft:25
    },
    alimentInput:{
        borderRadius:10,
        borderWidth:1,
        paddingBottom:50,
        marginHorizontal:25
    },
    limitationText:{
        color:'gray',
        fontFamily:'Gilroy-Medium',
        fontSize:13,
        marginLeft:25,
        marginTop:5,
        marginBottom:10
    }
});

export default PatientIntakeScreen;