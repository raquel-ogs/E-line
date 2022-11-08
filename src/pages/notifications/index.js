import React from 'react'
import {View, Text, ImageBackground, StyleSheet} from 'react-native'
import Header from '../../components/header';

export default function Novidades(){
return(
    <View style={styles.container}>
        <ImageBackground style={{
            width: '100%',
            height: '100%',
        }}
        imageStyle={{
                width:'100%',
                height: '25%',
        }}
        source={require('./../../img/Vector_2.png')}>
            <Header nome={'Notificações'}/>
            <View style={{height: '75vh', justifyContent: 'center'}}>
                <Text style={styles.txt}>
                    Não há novidades para você
                </Text>
            </View>
        </ImageBackground>
    </View>
);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FCFCFC',
    },
    txt:{
        fontFamily: 'Poppins_400Regular',
        fontSize: '1rem',
        color: '#808080',
        textAlign: 'center'

    }
})