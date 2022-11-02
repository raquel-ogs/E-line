import { useRoute } from '@react-navigation/native';
import React from 'react'
import {StyleSheet, View,Text, ImageBackground} from 'react-native'
import HeaderBack from '../../components/header-back';

export default function Detalhes(){

const routes = useRoute();

return(
    <View style={styles.container}>
        <View style={styles.fundo}>
            <ImageBackground style={{
                width: '100%',
                height: '100%',
                alignItems: 'center'
            }}
            imageStyle={{
                    marginTop: '-5.5vh',
                    width:'100%',
                    height: '25%',
            }}
            source={require('./../../img/Vector_3.png')}>
                <HeaderBack/>
                <View style={{width: '85%', padding: 15}}>    
                    <Text style ={styles.subtitle}> Nome completo </Text>
                    <Text style ={styles.subtitle}> Turma </Text>
                    <Text style ={styles.subtitle}> Nota 1 </Text>
                    <Text style ={styles.subtitle}> Nota 2 </Text>
                    <Text style ={styles.subtitle}> Nota 3 </Text>
                </View>
                <ImageBackground style={{
                width: '100%',
                height: '100%',
                alignItems: 'center'
                }}
                imageStyle={{
                        width:'100%',
                        height: '15%',
                }}
                source={require('./../../img/Vector_5.png')}/>
            </ImageBackground>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FCFCFC'
    },
    fundo:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    subtitle:{
        fontFamily: 'Trap-SemiBold',
        fontSize: 16
    },
    txt: {
        height: 45,
        width: '90%',
        margin: 12,
        borderWidth: 1.5,
        borderRadius: 45/4,
        padding: 10,
        borderColor: '#DCDCDC',
        fontFamily: 'Trap-Light',
        fontSize: 14
        
    },
    btn:{
        height: 40,
        width: '75%',
        borderRadius: 40/4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#720CF7',
    }

})
