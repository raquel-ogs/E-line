import React, {useEffect, useState} from 'react'
import {ScrollView, View, Text, ImageBackground, TextInput, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import firebase from '../../../config';
import Header from '../../components/header';
import Card from '../../components/cardAccount';

export default function Conta(){

const [professor, setProfessor] = useState([]);
useEffect(()=>{
    async function buscarProfessor(){
        await firebase.database().ref('Professores/').on('value',(snapshot)=> {
            snapshot.forEach((childItem) => {
                var data = {
                    key: childItem.val().Key,
                    celular: childItem.val().celular,
                    cfep: childItem.val().cfep,
                    disciplina: childItem.val().disciplina,
                    email: childItem.val().email,
                    endereco: childItem.val().endereco,
                    imagem: childItem.val().imagem,
                    nome: childItem.val().nome,
                };
                setProfessor(professor=>[...professor, data]);
            })
        });
}
buscarProfessor();
},[])

return(
    <ScrollView>
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
                <Header nome={'Conta'}/>
                    <View style={{ alignItems: 'center'}}>
                        <FlatList 
                            showsVerticalScrollIndicator = {false}
                            data = {professor}
                            keyExtractor= { (item) => item.Key}
                            renderItem = { ({item}) => (
                                <View>
                                    <Card data={item}/>
                                    <View style={{width: '100%', padding: 20}}>    
                                        <Text style ={styles.subtitle}> Nome completo </Text>
                                            <TextInput style={styles.input} 
                                            value={item.nome}/>
                                        <Text style ={styles.subtitle}> CFEP </Text>
                                            <TextInput style={styles.input} 
                                            value={item.cfep}/>
                                        <Text style ={styles.subtitle}> Endereço </Text>
                                            <TextInput style={styles.input} 
                                            value={item.endereco}/>
                                        <Text style ={styles.subtitle}> Email </Text>
                                            <TextInput style={styles.input} 
                                            value={item.email}/>
                                        <Text style ={styles.subtitle}> Celular </Text>
                                            <TextInput style={styles.input} 
                                            value={item.celular}/>
                                    </View>
                                    <View style={{width: '95%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5}}>
                                        <TouchableOpacity style={styles.btn}>
                                            <Text style={{color: 'white', fontSize: 15, fontFamily: 'Trap-SemiBold', letterSpacing: '10%'}}> Atualizar </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btn}>
                                            <Text style={{color: 'white', fontSize: 15, fontFamily: 'Trap-SemiBold', letterSpacing: '10%'}}> Sair da Conta </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }/>    
                    </View>
            </ImageBackground>
        </View>
    </ScrollView>

);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        fontFamily: 'Trap-SemiBold',
        fontSize: 16,
        backgroundColor: '#FCFCFC'

    },
    input: {
        height: 45,
        width: '95%',
        margin: 12,
        borderWidth: 1.5,
        borderRadius: 45/4,
        padding: 10,
        borderColor: '#DCDCDC',
        fontFamily: 'Trap-Light',
        fontSize: 14
    },
    subtitle:{
        fontFamily: 'Trap-SemiBold',
        fontSize: 16
    },
    btn:{
        height: 40,
        width: '40%',
        borderRadius: 40/4,
        padding: 5,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#720CF7',
    }
})