import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen, {screenOptions as WelcomeScreenOptions} from '../screens/WelcomeScreen';
import SignUpScreen, {screenOptions as SignUpScreenOptions} from '../screens/SignUpScreen';
import SignInScreen, {screenOptions as SignInScreenOptions} from '../screens/SignInScreen';
import ForgotPasswordScreen, {screenOptions as ForgotPasswordScreenOptions} from '../screens/ForgotPasswordScreen';
import SplashScreen, {screenOptions as SplashScreenOptions} from '../screens/SplashScreen';
import HomeScreen, {screenOptions as HomeScreenOptions} from '../screens/HomeScreen';
import DemoScreen, {screenOptions as DemoScreenOptions} from '../screens/DemoScreen';
import CallScreen, {screenOptions as CallScreenOptions} from '../screens/Call/CallScreen';
import SearchScreen, {screenOptions as SearchScreenOptions} from '../screens/SearchScreen';
import HealthBlogScreen, {screenOptions as HealthBlogScreenOptions} from '../screens/HealthBlogScreen';
import DialScreen, {screenOptions as DialScreenOptions} from '../screens/DialScreen';
import AccountScreen, {screenOptions as AccountScreenOptions} from '../screens/AccountScreen';
import UserConformationScreen, {screenOptions as UserConformationScreenOptions} from '../screens/Call/UserConformationScreen';
import PatientIntakeScreen, {screenOptions as PatientIntakeScreenOptions} from '../screens/Call/PatientIntakeScreen';
import PatientAssessmentScreen, {screenOptions as PatientAssessmentScreenOptions} from '../screens/Call/PatientAssessmentScreen';
import PatientAssessmentTimeScreen, {screenOptions as PatientAssessmentTimeScreenOptions} from '../screens/Call/PatientAssessmentTimeScreen';
import PatientAssessmentFeelScreen, {screenOptions as PatientAssessmentFeelScreenOptions} from '../screens/Call/PatientAssessmentFeelScreen';
import PatientAssessmentSymptomsScreen, {screenOptions as PatientAssessmentSymptomsScreenOptions} from '../screens/Call/PatientAssessmentSymptomsScreen';
import PatientAssessmentInfoScreen, {screenOptions as PatientAssessmentInfoScreenOptions} from '../screens/Call/PatientAssessmentInfoScreen';
import PatientConnectivityScreen, {screenOptions as PatientConnectivityScreenOptions} from '../screens/Call/PatientConnectivityScreen';
import SamiTabNavigator from './SamiTabNavigator';
const stack = createStackNavigator();

const SemiNavigator = () =>{
    return(
        <NavigationContainer>
            <stack.Navigator initialRouteName='Splash'>
                <stack.Screen
                    name='SignUp'
                    component={SignUpScreen}
                    options={SignUpScreenOptions}
                />
                <stack.Screen
                    name='SignIn'
                    component={SignInScreen}
                    options={SignInScreenOptions}
                />
                <stack.Screen
                    name='ForgotPassword'
                    component={ForgotPasswordScreen}
                    options={ForgotPasswordScreenOptions}
                />
                <stack.Screen
                    name='Welcome'
                    component={WelcomeScreen}
                    options={WelcomeScreenOptions}
                />
                <stack.Screen
                    name='Splash'
                    component={SplashScreen}
                    options={SplashScreenOptions}
                />
                <stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={HomeScreenOptions}
                />
                <stack.Screen
                    name='Demo'
                    component={DemoScreen}
                    options={DemoScreenOptions}
                />
                <stack.Screen
                    name='Call'
                    component={CallScreen}
                    options={CallScreenOptions}
                />
                <stack.Screen
                    name='Search'
                    component={SearchScreen}
                    options={SearchScreenOptions}
                />
                <stack.Screen    
                    name='HealthBlog'
                    component={HealthBlogScreen}
                    options={HealthBlogScreenOptions}
                />
                <stack.Screen
                    name='Dial' 
                    component={DialScreen}
                    options={DialScreenOptions}
                />
                <stack.Screen
                    name='Account'
                    component={AccountScreen}
                    options={AccountScreenOptions}
                />
                <stack.Screen
                    name='SamiTab'
                    component={SamiTabNavigator}
                    options={{headerShown: false}}
                />
                <stack.Screen
                    name='UserConformation'
                    component={UserConformationScreen}
                    options={UserConformationScreenOptions}
                />
                <stack.Screen
                    name='PatientIntake'
                    component={PatientIntakeScreen}
                    options={PatientIntakeScreenOptions}
                />
                <stack.Screen
                    name='PatientAssessment'
                    component={PatientAssessmentScreen}
                    options={PatientAssessmentScreenOptions}
                />
                <stack.Screen
                    name='PatientAssessmentTime'
                    component={PatientAssessmentTimeScreen}
                    options={PatientAssessmentTimeScreenOptions}
                />
                <stack.Screen
                    name='PatientAssessmentFeel'
                    component={PatientAssessmentFeelScreen}
                    options={PatientAssessmentFeelScreenOptions}
                />
                <stack.Screen
                    name='PatientAssessmentSymptoms'
                    component={PatientAssessmentSymptomsScreen}
                    options={PatientAssessmentSymptomsScreenOptions}
                />
                <stack.Screen
                    name='PatientAssessmentInfo'
                    component={PatientAssessmentInfoScreen}
                    options={PatientAssessmentInfoScreenOptions}
                />
                <stack.Screen
                    name='PatientConnectivity'
                    component={PatientConnectivityScreen}
                    options={PatientConnectivityScreenOptions}
                />
            </stack.Navigator>
        </NavigationContainer>
    );
};

export default SemiNavigator;