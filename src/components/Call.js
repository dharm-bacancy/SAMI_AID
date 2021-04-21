import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,Image,Dimensions} from 'react-native';
import CallButton from './button/CallButton';
import * as Animatable from 'react-native-animatable';
import Colors from '../constants/Colors';

const Call = props =>{
    const [selectedCat, setSelectedCat] = useState('');
    const {navigation}=props;
    useEffect(()=>{
        const screenWillFocus = navigation.addListener('focus',()=>{
            setSelectedCat('speakToNurse')
        })
        return screenWillFocus;
    }, [navigation])
    return(
        <View style={styles.callButton}>
            <View style={styles.button}>
            <Animatable.View  animation='zoomIn'>
                <CallButton
                    image={require('../../assets/images/md_img.png')}
                    title='Speak to Doctor'
                    style={{marginTop:5, backgroundColor:selectedCat==='speakToDoctor' ? Colors.primaryColor: 'white'}}
                    onSelect={()=>{setSelectedCat('speakToDoctor')
                        props.navigation.navigate('UserConformation')}}
                    textStyle={{color:selectedCat==='speakToDoctor' ? 'white':'black'}}
                />
                </Animatable.View>
                <Animatable.View  animation='zoomIn'>
                <CallButton
                    image={require('../../assets/images/contact_img_white.png')}
                    title='Speak to Nurse'
                    style={{backgroundColor:selectedCat==='speakToNurse'? Colors.primaryColor:Colors.primaryColor, marginTop:10}}
                    textStyle={{color:selectedCat==='speakToNurse' ? 'white':'white'}}
                    onSelect={()=>{setSelectedCat('speakToNurse')
                        props.navigation.navigate('UserConformation')}}

                />
                </Animatable.View>
                <Animatable.View  animation='zoomIn'>
                <CallButton
                    image={require('../../assets/images/md_img.png')}
                    title='Speak to Phychiatrist (BH)'
                    style={{marginTop:10, backgroundColor:selectedCat==='speakToPhychiatrist' ? Colors.primaryColor:'white'}}
                    textStyle={{color:selectedCat==='speakToPhychiatrist' ? 'white':'black'}}
                    onSelect={()=>{setSelectedCat('speakToPhychiatrist')
                        props.navigation.navigate('UserConformation')}}
                />
            </Animatable.View>
            </View>
            <Text style={styles.emergencyText}>Connect to Emergency Services anywhere in the world</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    callButton:{
        height:'55%',
        width:'83%',
        backgroundColor:'white',
        marginLeft:Dimensions.get('window').width / 12,
        elevation: 15,
        borderRadius: 19,
        marginTop:40
    },
    button:{
        marginLeft:20,
        marginTop:17
    },
    emergencyText:{
        textAlign:'center',
        fontSize:13,
        fontFamily:'FiraSans-SemiBoldItalic',
        marginHorizontal:50,
        marginTop:10
    }
});

export default Call;