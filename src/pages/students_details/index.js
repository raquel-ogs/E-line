import { useRoute } from '@react-navigation/native';
import React from 'react'
import {StyleSheet, View,Text, ImageBackground, TextInput, TouchableOpacity} from 'react-native'
import Card from '../../components/cardDetails';
import HeaderBack from '../../components/header-back';

export default function Detalhes(){

const route = useRoute();

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
                <Card data={route.params?.dados}/>
                <View style={{width: '80%', padding: 20}}>    
                    <Text style ={styles.subtitle}> Nome completo </Text>
                        <TextInput style={styles.input} 
                        placeholder={route.params?.dados.nome}/>
                    <Text style ={styles.subtitle}> Nota 1 </Text>
                        <TextInput style={styles.input} 
                        placeholder={route.params?.dados.nota1}/>
                    <Text style ={styles.subtitle}> Nota 2 </Text>
                        <TextInput style={styles.input} 
                        placeholder={route.params?.dados.nota2}/>
                    <Text style ={styles.subtitle}> Nota 3 </Text>
                        <TextInput style={styles.input} 
                        placeholder={route.params?.dados.nota3}/>
                </View>
                <View style={{width: '95%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5}}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={{color: 'white', fontSize: 15, fontFamily: 'Trap-SemiBold', letterSpacing: '10%'}}> Atualizar </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={{color: 'white', fontSize: 15, fontFamily: 'Trap-SemiBold', letterSpacing: '10%'}}> Excluir </Text>
                        </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FCFCFC',
        alignItems: 'center',
    },
    fundo:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    subtitle:{
        textAlign: 'left',
        fontFamily: 'Trap-SemiBold',
        fontSize: 16
    },
    input: {
        height: 45,
        width: '95%',
        margin: 12,
        borderWidth: 1.5,
        borderRadius: 45/4,
        padding: 10,
        alignItems: 'center',
        borderColor: '#DCDCDC',
        fontFamily: 'Trap-Light',
        fontSize: 14
    },
    btn:{
        height: 40,
        width: '35%',
        borderRadius: 40/4,
        padding: 5,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#720CF7',
    }
})
