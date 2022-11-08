import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default function HeaderStudents(){
    return(
        <View style={styles.header}>
            <Text style={styles.text}> Alunos </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height: '12vh',
        padding: 25,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: 'transparent'

    },
    text:{
        position: 'absolute',
        fontFamily: 'Poppins_700Bold',
        fontSize: 20,
        color: 'linear-gradient(90deg, rgba(37, 0, 224, 0.65) 0%, rgba(37, 0, 224, 0.65) 0.01%, rgba(89, 0, 235, 0.65) 100%)',                
    }

})
