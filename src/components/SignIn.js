import React, {useState,useReducer,useCallback} from 'react';
import {View,StyleSheet,Text,ScrollView,TextInput, Dimensions,Button,TouchableOpacity,Image,Alert} from 'react-native';
import Colors from '../constants/Colors';
import CustomButton from '../components/CustomButton';
import CheckBox from '@react-native-community/checkbox';
import * as Animatable from 'react-native-animatable';

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

const SignIn = props => {
    const [isRemember, setIsRemember] = useState(false);
    const [isTouchable, setIsTouchable] = useState(false);

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            username:'',
            password:''
        },
        inputValidities:{
            username:true,
            password:true
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
            Alert.alert('All fields required !','Please fill all details', [{text: 'Okay'}]);
            return;
        }
        props.navigation.replace('Home')
    },[formState]);

    return(
        <View style={styles.signInForm}>
            <ScrollView>
                <Text style={styles.header}>Username</Text>
                <Animatable.View animation='slideInRight' duration={2000} style={styles.animation}>
                    <TextInput  
                        placeholder='Enter Username' 
                        placeholderTextColor={Colors.placeholderColor}
                        keyboardType='default'
                        value={formState.inputValues.username}
                        onChangeText={textChangeHandler.bind(this, 'username')}
                    />
                </Animatable.View>
                {!formState.inputValidities.username && <Text style={{color:'red', marginLeft:20}}>Username is required!</Text>}
                <Text style={styles.header}>Password</Text>
                <Animatable.View animation='slideInRight' duration={2000} style={styles.animation}>
                    <View style={styles.passwordEnable}>
                        <TextInput 
                            style={styles.headerPasswordInput} 
                            placeholder='Enter Password' 
                            placeholderTextColor={Colors.placeholderColor}
                            keyboardType='default'
                            value={formState.inputValues.password}
                            onChangeText={textChangeHandler.bind(this, 'password')}
                        />
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/preview-enable.png')} style={styles.previewEnable}/>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
                {!formState.inputValidities.password && <Text style={{color:'red', marginLeft:20}}>Password is required!</Text>}
                <TouchableOpacity onPress={props.onForgot}>
                    <Text style={styles.forgotPassword}>Forgot Password ?</Text>
                </TouchableOpacity>
                <Animatable.View animation='slideInRight' duration={2000}>
                    <View style={styles.checkboxForm}>
                            <CheckBox 
                                value={isRemember} 
                                onValueChange={setIsRemember} 
                                tintColors={{true: Colors.checkBoxTrue, false:Colors.primaryColor}}
                                style={styles.checkBox}
                            />
                            <Text style={styles.checkBoxText}>Remember Username</Text>
                    </View>
                </Animatable.View>
                <Animatable.View animation='slideInRight' duration={2000}>
                    <View style={styles.checkboxForm}>
                            <CheckBox 
                                value={isTouchable} 
                                onValueChange={setIsTouchable} 
                                tintColors={{true: Colors.checkBoxTrue, false:Colors.primaryColor}}
                                style={styles.checkBox}
                            />
                            <Text style={styles.checkBoxText}>Enable Touch ID</Text>
                    </View>
                </Animatable.View>
                <CustomButton title='SIGN IN' style={styles.signUpButton} onSelect={submitHandler}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        color:Colors.statusBar,
        fontSize:19,
        fontFamily:'Gilroy-Medium',
        marginLeft:Dimensions.get('window').width / 22,
        marginTop:Dimensions.get('window').width / 20
    },
    animation:{
        borderBottomColor:Colors.statusBar,
        borderBottomWidth: 1,
        width:'80%',
        marginLeft:Dimensions.get('window').width / 25,
        fontSize: 15,
        marginTop:10,
        marginBottom:15
    },
    headerPasswordInput:{
        width:'60%',
        marginRight:Dimensions.get('window').width / 10,
        fontSize: 15,
        marginTop:10,
    },
    signInForm:{
        height:'150%',
        width:'80%',
        backgroundColor:'white',
        marginLeft:Dimensions.get('window').width / 10,
        flex:1,
        elevation: 15
    },
    signUpButton:{
        backgroundColor:Colors.primaryColor,
        marginTop:Dimensions.get('window').height /25,
        marginLeft:Dimensions.get('window').width /15,
        marginBottom:10,
        width:Dimensions.get('window').width / 1.5,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    forgotPassword:{
        color:Colors.blue,
        fontSize: 18,
        marginLeft: Dimensions.get('window').width /3,
        marginTop:10,
        fontFamily:'Gilroy-Heavy'
    },
    checkboxForm:{
        flexDirection:'row',
        marginTop:20,
        marginLeft:20
    },
    checkBox:{
       transform:[{scaleX:1.5}, {scaleY:1.5}]
    },
    checkBoxText:{
        fontSize:19,
        color:Colors.primaryColor,
        marginLeft:10
    },
    passwordEnable:{
        flexDirection:'row',
        marginLeft:Dimensions.get('window').width / 25,
        marginRight:Dimensions.get('window').width / 10
    },
    previewEnable:{
        width:30,
        height:25,
        marginTop:21,
        marginLeft:33
    }
});

export default SignIn;