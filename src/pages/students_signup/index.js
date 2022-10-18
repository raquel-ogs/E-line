import React, {useState} from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View , Text } from 'react-native';
import firebase from '../../../config';

export default function Cadastrar(){

    const [nome, setNome] = useState("");
    const [nota1, setNota1] = useState("");
    const [nota2, setNota2] = useState("");
    const [nota3, setNota3] = useState("");
    const [imagem, setImagem] = useState("");

    async function inserirAluno(){
        const Students = await firebase.database().ref('Alunos');
        const Key = Students.push().key; 

        Students.child(Key).set({
            Nome: nome,
            Nota1: nota1,
            Nota2: nota2,
            Nota3: nota3,
            Imagem: imagem
        })
    }

    return (
    <View style={styles.container}>
        <Text style ={styles.subtitle}> Nome completo </Text>
        <TextInput style={styles.input} 
        placeholder="Nome" onChangeText= {(texto) => setNome(texto)}/>
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
        <TouchableOpacity style={styles.btn} onPress={inserirAluno}>
            <Text style={{color: 'white', fontFamily: 'Trap-SemiBold'}}> Cadastrar </Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FCFCFC'
    },
    subtitle:{
        fontFamily: 'Trap-SemiBold',
        fontSize: 16
    },
    input: {
        height: 40,
        width: '70%',
        margin: 12,
        borderWidth: 2,
        borderRadius: 40/5,
        padding: 10,
        borderColor: '#DCDCDC',
        fontFamily: 'Trap-Light',
        fontSize: 13
        
    },
    btn:{
        height: 40,
        width: '70%',
        borderRadius: 40/5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#720CF7',
    }

})
