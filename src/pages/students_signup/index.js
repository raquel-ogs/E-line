import React, {useState} from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View , Text, ImageBackground } from 'react-native';
import firebase from '../../../config';
import HeaderBack from '../../components/header-back';

export default function Cadastrar(){

    const [nome, setNome] = useState("");
    const [turma, setTurma] = useState("");
    const [nota1, setNota1] = useState("");
    const [nota2, setNota2] = useState("");
    const [nota3, setNota3] = useState("");
    const [imagem, setImagem] = useState("");

    async function inserirAluno(){
        const Students = await firebase.database().ref('Alunos');
        const Key = Students.push().key; 

        Students.child(Key).set({
            Nome: nome,
            Turma: turma,
            Nota1: nota1,
            Nota2: nota2,
            Nota3: nota3,
            Imagem: imagem
        })
    }

    return (

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
                    <TextInput style={styles.input} 
                    placeholder="Nome" onChangeText= {(texto) => setNome(texto)}/>
                    <Text style ={styles.subtitle}> Turma </Text>
                    <TextInput style={styles.input} 
                    placeholder="Turma" onChangeText= {(texto) => setTurma(texto)}/>
                    <Text style ={styles.subtitle}> Nota 1 </Text>
                    <TextInput style={styles.input} 
                    placeholder="Nota 1"  onChangeText= {(texto) => setNota1(texto)}/>
                    <Text style ={styles.subtitle}> Nota 2 </Text>
                    <TextInput style={styles.input} 
                    placeholder="Nota 2"  onChangeText= {(texto) => setNota2(texto)}/>
                    <Text style ={styles.subtitle}> Nota 3 </Text>
                    <TextInput style={styles.input} 
                    placeholder="Nota 3"  onChangeText= {(texto) => setNota3(texto)}/>
                    <Text style ={styles.subtitle}> Imagem </Text>
                    <TextInput style={styles.input} 
                    placeholder="Digite o link da foto do aluno"  onChangeText= {(texto) => setImagem(texto)}/>
                    <View style={{width: '100%', alignItems: 'center', padding: 10}}>
                        <TouchableOpacity style={styles.btn} onPress={inserirAluno}>
                            <Text style={{color: 'white', fontSize: 15, fontFamily: 'Trap-SemiBold', letterSpacing: '10%'}}> Cadastrar </Text>
                        </TouchableOpacity>
                    </View>
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
    input: {
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
