import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';

const CustomRedioButton = props =>{
    return(
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={props.onViewable} style={{...styles.redioButton,...props.redioStyle}}>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    redioButton:{
        borderRadius:50,
        padding:7,
        // paddingVertical:3,
        // paddingLeft:3,
        // paddingRight:3,
        backgroundColor:Colors.primaryColor,
        //marginRight:10,
        marginVertical:5,
        //paddingRight:10,
        // marginLeft:7,
        //marginRight:10,
        marginTop:4,
        marginBottom:4
        //marginBottom:5,
        //paddingLeft:10
    }
});

export default CustomRedioButton;