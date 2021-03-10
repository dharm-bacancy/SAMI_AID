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
            </stack.Navigator>
        </NavigationContainer>
    );
};

export default SemiNavigator;