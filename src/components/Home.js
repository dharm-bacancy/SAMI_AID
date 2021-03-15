import React, {useState,useReducer,useCallback,useEffect} from 'react';
import {View,StyleSheet,Text,ScrollView,TextInput, Dimensions,Button,TouchableOpacity,Image,Alert} from 'react-native';
import Colors from '../constants/Colors';
import HomeButton from './HomeButton';
import * as Animatable from 'react-native-animatable';

const Home = props => {
    const [selectedCat, setSelectedCat] = useState('');
    const {navigation}=props;
    useEffect(()=>{
        const screenWillFocus = navigation.addListener('focus',()=>{
            setSelectedCat('call')
        })
        return screenWillFocus;
    }, [navigation])
    return(
        <View style={styles.homeButton}>
            <Animatable.View  animation='zoomIn'>
            <View style={styles.button}>
                <HomeButton
                    image={require('../../assets/images/home_img.png')}
                    title='LEARN ABOUT SAMI-AID PREMIUM'
                    onSelect={()=>{setSelectedCat('home')
                        props.navigation.navigate('SamiTab',{screen:'Demo'})}}
                    style={{backgroundColor:selectedCat==='home'? Colors.primaryColor:'white'}}
                    textStyle={{color:selectedCat==='home' ? 'white':'black'}}
                />
                <HomeButton
                    image={require('../../assets/images/md_img_white.png')}
                    title='CALL A DOCTOR OR NURSE'
                    style={{...styles.callButton, backgroundColor:selectedCat==='call'? Colors.primaryColor:Colors.primaryColor}}
                    onSelect={()=>{setSelectedCat('call')
                        props.navigation.navigate('SamiTab')}}
                    textStyle={{color:selectedCat==='call' ? 'white':'white'}}
                />
            </View>
            </Animatable.View>
            <Animatable.View  animation='zoomIn'>
            <View style={styles.button}>
                <HomeButton
                    image={require('../../assets/images/search_img.png')}
                    title='INTELLIGENT PHYSICIAN MATCH'
                    onSelect={()=>{setSelectedCat('search')
                        props.navigation.navigate('SamiTab',{screen:'Search'})}}
                    style={{backgroundColor:selectedCat==='search'? Colors.primaryColor:'white'}}
                    textStyle={{color:selectedCat==='search' ? 'white':'black'}}
                />
                <HomeButton
                    image={require('../../assets/images/people_img.png')}
                    title='SAMI-AID HEALTH BLOG'
                    style={{...styles.healthBlogButton, backgroundColor:selectedCat==='people'? Colors.primaryColor:'white'}}
                    onSelect={()=>{setSelectedCat('people')
                        props.navigation.navigate('SamiTab',{screen:'HealthBlog'})}}
                    textStyle={{color:selectedCat==='people' ? 'white':'black'}}
                />
            </View>
            </Animatable.View>
            <Animatable.View  animation='zoomIn'>
            <View style={styles.button}>
                <HomeButton
                    image={require('../../assets/images/contact_img.png')}
                    title='Call SAMI-AID OR DIAL 911'
                    onSelect={()=>{setSelectedCat('dial')
                        props.navigation.navigate('Dial')}}
                    style={{backgroundColor:selectedCat==='dial'?Colors.primaryColor :'white'}}
                    textStyle={{color:selectedCat==='dial' ? 'white':'black'}}
                />
                <HomeButton
                    image={require('../../assets/images/logo_img.png')}
                    title='MY SAMI-AID PROFILE'
                    style={{...styles.healthBlogButton, backgroundColor:selectedCat==='about'? Colors.primaryColor:'white'}}
                    onSelect={()=>{setSelectedCat('about')
                        props.navigation.navigate('Account')}}
                    textStyle={{color:selectedCat==='about' ? 'white':'black'}}
                />
            </View>
            </Animatable.View>
        </View>
    );
};

const styles = StyleSheet.create({
    homeButton:{
        height:'50%',
        width:'83%',
        backgroundColor:'white',
        marginLeft:Dimensions.get('window').width / 12,
        elevation: 15,
        borderRadius: 19,
        marginTop:10
    },
    button:{
        flexDirection:'row',
        marginLeft:20,
        marginTop:10
    },
    callButton:{
        backgroundColor: Colors.primaryColor,
        marginLeft:25
    },
    healthBlogButton:{
        marginLeft: 25
    }
});

export default Home;