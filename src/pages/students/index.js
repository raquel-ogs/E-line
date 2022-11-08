import React, {useEffect, useState} from 'react'
import {StyleSheet, ScrollView, View, ImageBackground, TextInput, FlatList} from 'react-native';
import firebase from '../../../config'
import HeaderStudents from '../../components/header-students';
import Card from '../../components/cardStudents';

export default function Home(){

const [alunos, setAlunos] = useState([]);

useEffect(()=>{
    async function buscarAlunos(){
        await firebase.database().ref('Alunos/').on('value',(snapshot)=> {
            snapshot.forEach((childItem) => {
                var data = {
                    key: childItem.Key,
                    nome: childItem.val().Nome,
                    turma: childItem.val().Turma,
                    nota1: childItem.val().Nota1,
                    nota2: childItem.val().Nota2,
                    nota3: childItem.val().Nota3,
                    imagem: childItem.val().Imagem,

                };
                setAlunos(alunos=>[...alunos, data]);
            })
        });
}
buscarAlunos();
},[])

return(
    <ScrollView>
        <View>
            <ImageBackground style={{
                    width: '100%',
                    height: '25%',
                }}
                imageStyle={{
                        width:'100%',
                        height: '100%',
                }}
                source={require('./../../img/Vector_2.png')}>
                <HeaderStudents/>
                <View style={{alignItems: 'center'}}>
                    <TextInput style={styles.input} placeholder="Pesquisar alunos" />
                </View>
                <View style={{width: '98%', alignItems: 'center', marginTop: '8vh'}}>
                    <FlatList 
                        showsVerticalScrollIndicator = {false}
                        data = {alunos}
                        keyExtractor= { (item) => item.Key}
                        renderItem = { ({item}) => (
                            <Card data={item}/>
                        )
                    }
                    />
                </View> 
            </ImageBackground>
        </View> 
    </ScrollView>
);
}

const styles = StyleSheet.create({
    input:{
        backgroundColor: 'white',
        borderRadius: '50vh',
        position: 'absolute',
        width: '75%',
        height: 50,
        color: '#3C3C3C',
        fontFamily: 'Trap-Light',
        fontSize: '1rem',
        marginTop: 5,
        padding: 25,
        textAlign: 'left',
        filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.1))'
        }
});
