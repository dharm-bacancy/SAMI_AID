import React, {useState,useReducer,useCallback} from 'react';
import {View,StyleSheet,Text,ScrollView,TextInput, Dimensions,Button,TouchableOpacity,Image,Alert} from 'react-native';
import Colors from '../constants/Colors';
import CustomButton from '../components/CustomButton';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updateValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid 
        };
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return{
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updateValues
        };
    }
    return state;
};

const ForgotPassword = props => {

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email:''
        },
        inputValidities:{
            email:true,
        },
        formIsValid: false
    });

    const textChangeHandler = (inputIdentifier, text) => {
        let isValid = false;
        if (text.trim().length > 0) {
            isValid = true;
        }
        dispatchFormState({type: FORM_INPUT_UPDATE, value:text, isValid: isValid, input: inputIdentifier});
    };

    const submitHandler = useCallback(()=>{
        if (!formState.formIsValid) {
            Alert.alert('Email is required !','Please enter Email address', [{text: 'Okay'}]);
            return;
        }
        props.navigation.replace('SignIn')
    },[formState]);

    return(
        <View style={styles.forgotPasswordForm}>
            <ScrollView>
                <Text style={styles.header}>account reset</Text>
                <Text style={styles.headerText}>Enter your email address and we will send you a link to reset your password.</Text>
                <TextInput 
                    style={styles.headerInput} 
                    placeholder='Enter Email' 
                    placeholderTextColor={Colors.placeholderColor}
                    keyboardType='default'
                    value={formState.inputValues.email}
                    onChangeText={textChangeHandler.bind(this, 'email')}
                />
                {!formState.inputValidities.email && <Text style={{color:'red', marginLeft:20}}>Email is required!</Text>}
                <CustomButton title='SEND' style={styles.sendButton} onSelect={submitHandler}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        color:Colors.statusBar,
        fontSize:21,
        fontFamily:'Gilroy-Medium',
        marginLeft:Dimensions.get('window').width / 22,
        marginTop:Dimensions.get('window').width / 20
    },
    headerInput:{
        borderBottomColor:Colors.statusBar,
        borderBottomWidth: 1,
        width:'80%',
        marginLeft:Dimensions.get('window').width / 25,
        fontSize: 17,
        marginTop:10,
        marginBottom:15
    },
    forgotPasswordForm:{
        height:'45%',
        width:'80%',
        backgroundColor:'white',
        marginLeft:Dimensions.get('window').width / 10,
        //flex:1,
        elevation: 15
    },
    sendButton:{
        backgroundColor:Colors.primaryColor,
        marginTop:Dimensions.get('window').height /25,
        marginLeft:Dimensions.get('window').width /15,
        marginBottom:10,
        width:Dimensions.get('window').width / 1.5,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    headerText:{
        fontSize:18,
        marginLeft:Dimensions.get('window').width / 22,
        marginTop:Dimensions.get('window').width / 20,
        color:Colors.secondaryBlack,
        fontFamily:'FiraSans-SemiBoldItalic'
    }
});

export default ForgotPassword;