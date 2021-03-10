import React, {useState,useCallback,useReducer} from 'react';
import {View,StyleSheet,Text,ScrollView,TextInput, Dimensions,Button,TouchableOpacity,Alert} from 'react-native';
import Colors from '../constants/Colors';
import {Picker} from '@react-native-picker/picker';
import moment from 'moment';
import DateTimePicker  from '@react-native-community/datetimepicker';
import CustomButton from '../components/CustomButton';
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

const SignUp = props => {
    const [martialStatus, setMartialStatus] = useState('');
    const [language, setLanguage] = useState(false);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [selectedData, setSelectedData] = useState();

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:'',
            address:'',
            cellPhone:''
        },
        inputValidities:{
            firstName:true,
            lastName:true,
            email:true,
            password:true,
            confirmPassword:true,
            address:true,
            cellPhone:true
        },
        formIsValid: false
    });

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setSelectedData(moment(currentDate).format('MM-DD-YYYY'));
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const selectMartialStatus = item => {
        setMartialStatus(item);
    };
    const selectLanguage = (item) => {
        setLanguage(item);
    };

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
        <View style={styles.signUpForm}>
            <ScrollView>
                <Text style={styles.header}>First Name</Text>
                <Animatable.View animation='slideInRight' duration={2000}>
                    <TextInput 
                        style={styles.headerInput} 
                        placeholder='Enter First Name' 
                        placeholderTextColor={Colors.placeholderColor}
                        keyboardType='default'
                        returnKeyType='next'
                        value={formState.inputValues.firstName}
                        onChangeText={textChangeHandler.bind(this, 'firstName')}
                    />
                </Animatable.View>
                {!formState.inputValidities.firstName && <Text style={{color:'red', marginLeft:20}}>First Name is required!</Text>}
                <Text style={styles.header}>Last Name</Text>
                <Animatable.View animation='slideInRight' duration={2000}>
                    <TextInput 
                        style={styles.headerInput} 
                        placeholder='Enter Last Name' 
                        placeholderTextColor={Colors.placeholderColor}
                        keyboardType='default'
                        value={formState.inputValues.lastName}
                        onChangeText={textChangeHandler.bind(this, 'lastName')}
                    />
                </Animatable.View>
                {!formState.inputValidities.lastName && <Text style={{color:'red', marginLeft:20}}>Last Name is required!</Text>}
                <Text style={styles.header}>Email</Text>
                <Animatable.View animation='slideInRight' duration={2000}>
                    <TextInput 
                        style={styles.headerInput} 
                        placeholder='Enter Email' 
                        placeholderTextColor={Colors.placeholderColor}
                        keyboardType='email-address'
                        value={formState.inputValues.email}
                        onChangeText={textChangeHandler.bind(this, 'email')}
                    />
                </Animatable.View>
                {!formState.inputValidities.email && <Text style={{color:'red', marginLeft:20}}>Email is required!</Text>}
                <Text style={styles.header}>Password</Text>
                <Animatable.View animation='slideInRight' duration={2000}>
                    <TextInput 
                        style={styles.headerInput} 
                        placeholder='Enter Password' 
                        placeholderTextColor={Colors.placeholderColor}
                        keyboardType='default'
                        value={formState.inputValues.password}
                        onChangeText={textChangeHandler.bind(this, 'password')}
                    />
                </Animatable.View>
                {!formState.inputValidities.password && <Text style={{color:'red', marginLeft:20}}>Password is required!</Text>}
                <Text style={styles.header}>Confirm Password</Text>
                <Animatable.View animation='slideInRight' duration={2000}>
                    <TextInput 
                        style={styles.headerInput} 
                        placeholder='Enter Confirm Password' 
                        placeholderTextColor={Colors.placeholderColor}
                        keyboardType='default'
                        value={formState.inputValues.confirmPassword}
                        onChangeText={textChangeHandler.bind(this, 'confirmPassword')}
                    />
                </Animatable.View>
                {!formState.inputValidities.confirmPassword && <Text style={{color:'red', marginLeft:20}}>Confirm Password is required!</Text>}
                <Text style={styles.header}>Address</Text>
                <Animatable.View animation='slideInRight' duration={2000}>
                    <TextInput 
                        style={styles.headerInput} 
                        placeholder='Enter Address' 
                        placeholderTextColor={Colors.placeholderColor}
                        keyboardType='default'
                        value={formState.inputValues.address}
                        onChangeText={textChangeHandler.bind(this, 'address')}
                    />
                </Animatable.View>
                {!formState.inputValidities.address && <Text style={{color:'red', marginLeft:20}}>Address is required!</Text>}
                <Text style={styles.header}>Language</Text>
                <Animatable.View animation='slideInRight' duration={2000}>
                    <View style={styles.pickerHeader}>
                        <Picker
                            selectedValue={language}
                            style={styles.picker}
                            onValueChange={(item) =>selectLanguage(item)}
                        >
                            <Picker.Item label='Hindi' value='Hi'/>
                            <Picker.Item label='English' value='Eng'/>
                            <Picker.Item label='Gujarati' value='Guj'/>
                        </Picker>
                    </View>
                </Animatable.View>
                <Text style={styles.header}>Marital Status</Text>
                <Animatable.View animation='slideInRight' duration={2000}>
                    <View style={styles.pickerHeader}>
                        <Picker
                            selectedValue={martialStatus}
                            style={styles.picker}
                            onValueChange={(item) =>selectMartialStatus(item)}
                        >
                            <Picker.Item label='Married' value='Marry'/>
                            <Picker.Item label='Single' value='single'/>
                        </Picker>
                    </View>
                </Animatable.View>
                <Text style={styles.header}>Date Of Birth</Text>
                <Animatable.View animation='slideInRight' duration={2000}>
                    <View style={styles.pickerHeader}>
                        <TouchableOpacity onPress={showDatepicker} style={styles.datePicker}>
                            <Text style={styles.datePickerText}>{selectedData == null ? 'Select Date' : selectedData}</Text>
                        </TouchableOpacity>
                    {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        />
                    )}
                    </View>
                </Animatable.View>
                <Text style={styles.header}>Cell Phone</Text>
                <Animatable.View animation='slideInRight' duration={2000}>
                    <TextInput 
                        style={styles.headerInput} 
                        placeholder='Cell Phone' 
                        placeholderTextColor={Colors.placeholderColor} 
                        keyboardType='numeric' 
                        maxLength={10}
                        value={formState.inputValues.cellPhone}
                        onChangeText={textChangeHandler.bind(this, 'cellPhone')}
                    />
                </Animatable.View>
                {!formState.inputValidities.cellPhone && <Text style={{color:'red', marginLeft:20}}>cell Phone Number is required!</Text>}
                <CustomButton title='SIGN UP' style={styles.signUpButton} onSelect={submitHandler}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        color:Colors.statusBar,
        fontSize:18,
        fontFamily:'Gilroy-Medium',
        marginLeft:Dimensions.get('window').width / 22,
        marginTop:Dimensions.get('window').width / 20
    },
    headerInput:{
        borderBottomColor:Colors.statusBar,
        borderBottomWidth: 1,
        width:'80%',
        marginLeft:Dimensions.get('window').width / 22,
        fontSize: 14,
        marginTop:10,
        marginBottom:15
    },
    signUpForm:{
        height:'150%',
        width:'80%',
        backgroundColor:'white',
        marginLeft:Dimensions.get('window').width / 10,
        flex:1,
        elevation: 15
    },
    picker:{
        height:50,
        width:300,
        marginLeft: 15,
        color:Colors.placeholderColor
    },
    pickerHeader:{
        borderWidth:1, 
        borderColor:Colors.primaryColor,
        borderRadius: 10,
        marginHorizontal: 12,
        marginTop: 10
    },
    datePicker:{
        height:50
    },
    datePickerText:{
        fontSize:14,
        marginTop:12,
        marginLeft: 20,
        color:Colors.placeholderColor
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
});

export default SignUp;