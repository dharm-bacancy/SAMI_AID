import React from 'react';
import {View,Image,StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CallScreen from '../screens/Call/CallScreen';
import SearchScreen from '../screens/SearchScreen';
import AccountScreen from '../screens/AccountScreen';
import HealthBlogScreen from '../screens/HealthBlogScreen';
import HomeScreen from '../screens/HomeScreen';
const Tab = createBottomTabNavigator();

const SamiTabNavigator = () =>{
    return(
        <Tab.Navigator
            initialRouteName="Call"
            tabBarOptions={{showLabel: false, activeTintColor:'white', inactiveTintColor:'red'}}
            screenOptions={{animationEnabled: false}}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarVisible: false, 
                    tabBarIcon: () =>(
                        <Image 
                            source={require('../../assets/images/home_img.png')}
                            style={styles.icon}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Call'
                component={CallScreen}
                options={{
                    tabBarIcon: () =>(
                        <Image 
                            source={require('../../assets/images/md_img.png')}
                            style={styles.icon}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Search'
                component={SearchScreen}
                options={{
                    tabBarIcon: () =>(
                        <Image 
                            source={require('../../assets/images/search_img.png')}
                            style={styles.icon}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='HealthBlog'
                component={HealthBlogScreen}
                options={{
                    tabBarIcon: () =>(
                        <Image 
                            source={require('../../assets/images/people_img.png')}
                            style={styles.icon}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Account'
                component={AccountScreen}
                options={{
                    tabBarIcon: () =>(
                        <Image 
                            source={require('../../assets/images/logo_img.png')}
                            style={styles.icon}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    icon:{
        width:32,
        height:32
    }
});

export default SamiTabNavigator;