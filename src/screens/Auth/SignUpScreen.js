import React, {useState,useEffect,useCallback,useReducer} from 'react';
import {View,StyleSheet,Text,ImageBackground,Image,Dimensions,TouchableOpacity,ActivityIndicator,Alert,KeyboardAvoidingView,ScrollView,Button} from 'react-native';
import SignUp from '../../components/SignUp';
import Colors from '../../constants/Colors';
import {useDispatch} from 'react-redux';
import Input from '../../components/Input';
import * as Animatable from 'react-native-animatable';
import * as authAction from '../../store/actions/auth'; 
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

const SignUpScreen = props => {
    // const [isloading, setIsloading] = useState(false);
    // const [isSignup, setIsSignup] = useState(false);
    // const [error, setError] = useState();
    // const dispatch = useDispatch();

    // const [formState, dispatchFormState] = useReducer(formReducer, {
    //     inputValues: {
    //         email:'',
    //         password:''
    //     },
    //     inputValidities: {
    //         email:false,
    //         password: false
    //     },
    //     formIsValid: false
    // });

    // useEffect(()=>{
    //     if (error) {
    //         Alert.alert('An Error Occurred!', error, [{text:'Okay'}]);
    //     }
    // }, [error]);

    // const authHandler = async () =>{
    //     let action;
    //     if (isSignup) {
    //         action = authAction.signup(
    //             formState.inputValues.email,
    //             formState.inputValues.password
    //         ); 
    //     }
        // } else {
        //     action = authAction.login(
        //         formState.inputValues.email,
        //         formState.inputValues.password
        //     );
        // }
    //     setError(null);
    //     setIsloading(true);
    //     try {
    //         await dispatch(action);
    //         props.navigation.replace('Home');
    //     } catch (err) {
    //         setError(err.message);
    //         setIsloading(false);
    //     }
    // };

    // const inputChageHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
    //     dispatchFormState({
    //         type: FORM_INPUT_UPDATE, 
    //         value: inputValue, 
    //         isValid: inputValidity,
    //         input: inputIdentifier
    //     });
    // }, [dispatchFormState]);
    return(
        <View style={{flex:1}}>
            <ImageBackground source={require('../../../assets/images/signin_background.png')} style={styles.signUpBackground}>
            <Animatable.View  animation='pulse' easing="ease-out" iterationCount={3} style={styles.animation}>
                <Image source={require('../../../assets/images/logo_sami_aid_white.png')} style={styles.logo}/>
            </Animatable.View>
                <Text style={styles.signUpLogo}>SIGN UP</Text>
                <SignUp navigation={props.navigation} />
                {/* <KeyboardAvoidingView
                    behavior='padding'
                    keyboardVerticalOffset={50}
                    style={styles.screen}
                >
                    <Card style={styles.authContainer}> */}
                    {/* <ScrollView>
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
                        </ScrollView> */}
                    {/* </Card>
                </KeyboardAvoidingView> */}
                <View style={styles.singInAccount}>
                    <Text style={styles.accountText}>Existing User?</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('SignIn')}>
                        <Text style={styles.singIn}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export const screenOptions= navData => {
    return{
        headerShown: false
    };
};

const styles = StyleSheet.create({
    signUpBackground:{
        width:'100%',
        height:350,
        flex:1,
    },
    logo:{
        height:78,
        width:'80%',
        marginTop:Dimensions.get('window').height /13,
        marginLeft:Dimensions.get('window').width / 9
    },
    signUpLogo:{
        color:'white',
        fontSize:37,
        fontFamily:'Gilroy-Bold',
        marginTop:Dimensions.get('window').height /22,
        marginLeft:Dimensions.get('window').width / 3.1
    },
    accountText:{
        fontFamily:'Gilroy-Bold',
        fontSize:20
    },
    singInAccount:{
        flexDirection:'row',
        marginTop:Dimensions.get('window').width / 20,
        marginBottom:10,
        marginLeft:Dimensions.get('window').width / 4.2
    },
    singIn:{
        color:Colors.blue,
        fontSize: 20,
        marginLeft: 10,
        textDecorationLine:'underline',
        fontFamily:'Gilroy-Heavy'
    },
    // screen:{
    //     flex:1,
    //     justifyContent:'center',
    //     alignItems:'center',
    //     backgroundColor:'pink'
    // },
    // authContainer:{
    //     width:'80%',
    //     maxWidth:400,
    //     maxHeight: 400,
    //     padding:20
    // },
    // buttonContainer:{
    //     marginTop: 10
    // }
});

export default SignUpScreen;