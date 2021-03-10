import React from 'react';
import {StyleSheet,View,Text,TouchableNativeFeedback,Dimensions} from 'react-native';
import Colors from '../constants/Colors';

const CustomButton = (props) =>{
    return(
        <View>
            <TouchableNativeFeedback onPress={props.onSelect}>
                <View style={{...styles.button, ...props.style}}>
                    {props.children}
                    <Text style={styles.buttonText}>{props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    button:{
        flexDirection: "row",
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent:'center',
        height: Dimensions.get("window").height / 12,
        width: Dimensions.get('window').width / 1.5,
        borderRadius: 19
    },
    buttonText:{
        fontFamily: "Gilroy-Bold",
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
        color: "white"
    }
});

export default CustomButton;