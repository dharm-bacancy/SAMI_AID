import React, {useReducer,useCallback,useState,useEffect} from 'react';
import {StyleSheet,View,ScrollView,KeyboardAvoidingView,Button,ActivityIndicator,Alert} from 'react-native';
import Input from '../components/Input';
import Colors from '../constants/Colors';
import {useDispatch} from 'react-redux';
import * as authAction from '../store/actions/auth'; 
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if(action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };
        let updatedFormIsValid = true;
        for(const key in updatedValidities) {
            updatedFormIsValid= updatedFormIsValid && updatedValidities[key];
        }
        return{
            formIsValid:updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    }
    return state;
};

const AuthScreen = props => {
    const [isloading, setIsloading] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [error, setError] = useState();
    const dispatch = useDispatch();

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email:'',
            password:''
        },
        inputValidities: {
            email:false,
            password: false
        },
        formIsValid: false
    });

    useEffect(()=>{
        if (error) {
            Alert.alert('An Error Occurred!', error, [{text:'Okay'}]);
        }
    }, [error]);

    const authHandler = async () =>{
        let action;
        if (isSignup) {
            action = authAction.signup(
                formState.inputValues.email,
                formState.inputValues.password
            ); 
        } else {
            action = authAction.login(
                formState.inputValues.email,
                formState.inputValues.password
            );
        }
        setError(null);
        setIsloading(true);
        try {
            await dispatch(action);
            props.navigation.replace('Welcome');
        } catch (err) {
            setError(err.message);
            setIsloading(false);
        }
    };

    const inputChageHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
            type: FORM_INPUT_UPDATE, 
            value: inputValue, 
            isValid: inputValidity,
            input: inputIdentifier
        });
    }, [dispatchFormState]);

    return(
        <KeyboardAvoidingView
            behavior='padding'
            keyboardVerticalOffset={50}
            style={styles.screen}
        >
            <Card style={styles.authContainer}>
            <ScrollView>
                    <Input
                        id='email'
                        label='E-Mail'
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
                    <View style={styles.buttonContainer}>
                        {isloading ? (
                            <ActivityIndicator size='small' color={Colors.primary}/>
                        ) : (
                            <Button 
                                title={isSignup ? 'Sign up' : 'Login'} 
                                color={Colors.primary} 
                                onPress={authHandler}
                            />
                        )}
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button 
                            title={`Switch to ${isSignup ? 'Login' : 'Sign Up'}`} 
                            color={Colors.accent} 
                            onPress={()=>{
                                setIsSignup(prevState => !prevState);
                            }}
                        />
                    </View>
                </ScrollView>
            </Card>
        </KeyboardAvoidingView>
    );
};

export const screenOptions= navData => {
    return{
        headerShown: false
    };
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'pink'
    },
    authContainer:{
        width:'80%',
        maxWidth:400,
        maxHeight: 400,
        padding:20
    },
    buttonContainer:{
        marginTop: 10
    }
});

export default AuthScreen;