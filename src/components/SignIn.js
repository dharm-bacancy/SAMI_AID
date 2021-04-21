import React, {useState,useReducer,useCallback,useEffect} from 'react';
import {View,StyleSheet,Text,ScrollView,TextInput, Dimensions,Button,TouchableOpacity,Image,Alert} from 'react-native';
import Colors from '../constants/Colors';
import CustomButton from './button/CustomButton';
import CheckBox from '@react-native-community/checkbox';
import Input from './Input';
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
import {useDispatch} from 'react-redux';
import * as authAction from '../store/actions/auth'; 

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
    const dispatch = useDispatch();
    const [isloading, setIsloading] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [error, setError] = useState();
    const [isRemember, setIsRemember] = useState(false);
    const [isTouchable, setIsTouchable] = useState(false);
    const [isUsernameTouched, setIsUsernameTouched] = useState(false);
    const [isPasswordTouched, setIsPasswordTouched] = useState(false);

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email:'',
            password:''
        },
        inputValidities:{
            email:false,
            password:false
        },
        formIsValid: false
    });

    useEffect(()=>{
        if (error) {
            Alert.alert('An Error Occurred!', error, [{text:'Okay'}]);
        }
    }, [error]);

    // const authHandler = async () =>{
    //     let action;
    //     if (isSignup) {
    //         action = authAction.signup(
    //             formState.inputValues.email,
    //             formState.inputValues.password
    //         ); 
    //     } else {
    //         action = authAction.login(
    //             formState.inputValues.email,
    //             formState.inputValues.password
    //         );
    //     }
    //     setError(null);
    //     setIsloading(true);
    //     try {
    //         await dispatch(action);
    //         props.navigation.replace('Welcome');
    //     } catch (err) {
    //         setError(err.message);
    //         setIsloading(false);
    //     }
    // };

    const inputChageHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
            type: FORM_INPUT_UPDATE, 
            value: inputValue, 
            isValid: inputValidity,
            input: inputIdentifier
        });
    }, [dispatchFormState]);

    const textChangeHandler = (inputIdentifier, text) => {
        let isValid = false;
        if (text.trim().length > 0) {
            isValid = true;
        }
        dispatchFormState({type: FORM_INPUT_UPDATE, value:text, isValid: isValid, input: inputIdentifier});
    };

    // const submitHandler = useCallback(()=>{
    //     if (!formState.formIsValid) {
    //         Alert.alert('All fields required !','Please fill all details', [{text: 'Okay'}]);
    //         return;
    //     }
    //     props.navigation.replace('Home')
    // },[formState]); 

    const submitHandler = useCallback(()=>{
        let action;
        dispatch(
            action = authAction.login(
                formState.inputValues.email,
                formState.inputValues.password
            )
        );
        if (!formState.formIsValid) {
            Alert.alert('All fields required !','Please fill all details', [{text: 'Okay'}]);
            return;
        }
        props.navigation.replace('Home')
    },[formState]);

    return(
        <View style={styles.signInForm}>
            <ScrollView>
            <Input
                        id='email'
                        label='Email'
                        keyboardType='email-address'
                        required
                        email
                        autoCapitalized='none'
                        errorText='Please enter valid email address'
                        onInputChange={inputChageHandler}
                        initialValue=''
                        placeholder='Enter Email'
                    />
                <Input
                        id='password'
                        label='Password'
                        keyboardType='default'
                        secureTextEntry
                        required
                        minLength={5}
                        autoCapitalized='none'
                        errorText='Please enter valid password'
                        onInputChange={inputChageHandler}
                        initialValue=''
                        placeholder='Enter Password'
                    />
                {/* <Text style={styles.header}>Email</Text> */}
                {/* <TextInput  
                    placeholder='Enter Email' 
                    placeholderTextColor={Colors.placeholderColor}
                    keyboardType='default'
                    value={formState.inputValues.username}
                    onChangeText={textChangeHandler.bind(this, 'username')}
                    style={styles.textInput}
                    onBlur={()=>setIsUsernameTouched(true)}
                />
                {!formState.inputValidities.username && isUsernameTouched && <Text style={{color:'red', marginLeft:20}}>Username is required!</Text>}
                <Text style={styles.header}>Password</Text>
                <View style={styles.passwordEnable}>
                    <TextInput 
                        style={styles.headerPasswordInput} 
                        placeholder='Enter Password' 
                        placeholderTextColor={Colors.placeholderColor}
                        keyboardType='default'
                        value={formState.inputValues.password}
                        onChangeText={textChangeHandler.bind(this, 'password')}
                        onBlur={()=>setIsPasswordTouched(true)}
                    />
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/preview-enable.png')} style={styles.previewEnable}/>
                    </TouchableOpacity>
                </View>
                {!formState.inputValidities.password && isPasswordTouched && <Text style={{color:'red', marginLeft:20}}>Password is required!</Text>} */}
                <TouchableOpacity onPress={props.onForgot}>
                    <Text style={styles.forgotPassword}>Forgot Password ?</Text>
                </TouchableOpacity>
                <View style={styles.checkboxForm}>
                    <CheckBox 
                        value={isRemember} 
                        onValueChange={setIsRemember} 
                        tintColors={{true: Colors.primaryColor, false:Colors.primaryColor}}
                        style={styles.checkBox}
                    />
                    <Text style={styles.checkBoxText}>Remember Username</Text>
                </View>
                <View style={styles.checkboxForm}>
                    <CheckBox 
                        value={isTouchable} 
                        onValueChange={setIsTouchable} 
                        tintColors={{true: Colors.checkBoxTrue, false:Colors.primaryColor}}
                        style={styles.checkBox}
                    />
                    <Text style={styles.checkBoxText}>Enable Touch ID</Text>
                </View>
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
    textInput:{
        borderBottomColor:Colors.statusBar,
        borderBottomWidth: 1,
        width:'80%',
        marginLeft:Dimensions.get('window').width / 25,
        fontSize: 15,
        marginTop:10,
        marginBottom:15
    },
    headerPasswordInput:{
        width:'80%',
        marginRight:Dimensions.get('window').width / 20,
        fontSize: 15,
        marginTop:10
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
        marginRight:Dimensions.get('window').width / 10,
        borderBottomColor:Colors.statusBar,
        borderBottomWidth: 1,
    },
    previewEnable:{
        width:30,
        height:25,
        marginTop:21,
    }
});

export default SignIn;