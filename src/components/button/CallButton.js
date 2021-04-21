import React from 'react';
import {View,Text,StyleSheet,Dimensions,TouchableOpacity,Image} from 'react-native';
import Colors from '../../constants/Colors';

const CallButton = props => {
    return(
        <View>
            <TouchableOpacity onPress={props.onSelect} style={{...styles.button, ...props.style}}>
                {props.children}
                <Image style={styles.imageButton} source={props.image}/>
                <Text style={{...styles.buttonText, ...props.textStyle}}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'center',
        height: Dimensions.get("window").height / 8,
        width: Dimensions.get('window').width / 1.5,
        borderRadius: 19,
        elevation:15,
        marginLeft:13
    },
    buttonText:{
        fontFamily: "Gilroy-Bold",
        fontSize: 20,
        textAlign: "center",
        color: "black"
    },
    imageButton:{
        height:65,
        width:65,
    }
});

export default CallButton;