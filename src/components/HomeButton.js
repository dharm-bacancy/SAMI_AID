import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Dimensions,Image} from 'react-native';
import Colors from '../constants/Colors';

const HomeButton = (props) =>{
    return(
            <TouchableOpacity onPress={props.onSelect} style={{...styles.button, ...props.style}}>
                {props.children}
                <Image style={styles.imageButton} source={props.image}/>
                <Text style={{...styles.buttonText,...props.textStyle}}>{props.title}</Text>
            </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        justifyContent:'center',
        height: Dimensions.get("window").height / 7,
        width: Dimensions.get('window').width / 3,
        borderRadius: 19,
        elevation:15,
        overflow:'hidden'
    },
    buttonText:{
        fontFamily: "Gilroy-Bold",
        fontSize: 13,
        textAlign: "center",
        color: "black"
    },
    imageButton:{
        height:50,
        width:50,
    }
});

export default HomeButton;