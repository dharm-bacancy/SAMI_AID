import React from 'react';
import {StyleSheet,View} from 'react-native';
import CustomButton from './CustomButton';

const PatientIntake = props =>{
    return(
        <View>
            <CustomButton style={styles.button} title={props.illnessesName} onSelect={props.onViewDetail}/>
        </View>
    );
};

const styles = StyleSheet.create({
    button:{
        height:100,
        width:'90%',
        marginLeft:16,
        marginTop:25,
        elevation:5
    }
});

export default PatientIntake;