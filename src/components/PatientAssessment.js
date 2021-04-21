import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import CustomButton from './button/CustomButton';
import Colors from '../constants/Colors';

const PatientAssessment = props =>{
    return(
        <View>
            <Text style={styles.detailText}>{props.detail}</Text>
            <Text style={styles.questionText}>{props.question}</Text>
            {/* <View style={styles.permissionButton}>
                <CustomButton title='YES' style={styles.yesButton} styleButtonText={styles.buttonText}/>
                <CustomButton title='NO' style={styles.noButton} styleButtonText={styles.buttonText}/>
            </View>
            <View style={styles.button}>
                <CustomButton title='BACK' style={styles.backButton} styleButtonText={styles.backText} onSelect={()=>props.navigation.goBack()}/>
                <CustomButton title='NEXT' style={styles.nextButton} styleButtonText={styles.nextText}/>
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    detailText:{
        fontSize:17,
        fontFamily:'Gilroy-Medium',
        marginHorizontal:'5%',
        color:'black',
        marginTop:'2%'
    },
    questionText:{
        marginTop:20,
        fontSize:21,
        fontFamily:'Gilroy-Bold',
        marginHorizontal:'5%',
        color:'black'
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
        backgroundColor:'white',
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
        backgroundColor:'white',
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

export default PatientAssessment;