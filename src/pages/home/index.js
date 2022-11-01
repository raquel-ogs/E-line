import { useNavigation } from '@react-navigation/native';
import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image,  FlatList, TouchableOpacity} from 'react-native';
import firebase from '../../../config'
import Header from '../../components/header-home';
import Icons from '../../components/icons';
import {MaterialIcons} from '@expo/vector-icons'

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
     <View style = {{alignItems:'center'}}>
        <Header/>
        <Icons/>
        <View style={{width: '80%', paddingTop: 30}}>
            <Text style={styles.title}>
                Alunos recentes
            </Text>
        </View>
        <View>
        <FlatList 
            showsVerticalScrollIndicator = {false}
            data = {alunos}
            numColumns= {2}
            keyExtractor= { (item) => item.Key}
            renderItem = { ({item}) => (
                <TouchableOpacity style={styles.containerAluno}>
                    <View style ={{ marginLeft: -5}}>
                        <Image style={{width: 100, height: 85}} source={require(`./../../img/${item.imagem}`)}/>
                    </View>
                    <View style={{ marginLeft: -5}}>
                        <Text style={{ fontFamily: 'Trap-SemiBold', fontSize: 14}}>
                            {item.turma} 
                        </Text>
                        <Text style={{fontFamily: 'Trap-Bold', fontSize: 19, color: '#720CF7'}}> 
                            {item.nome}
                        </Text>
                    </View>
                    <View style={{ marginLeft: -5}}>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="#720CF7" />
                    </View>
                </TouchableOpacity>
            )
        }
        />
        </View> 
     </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Trap-Bold',
        fontSize: 21
    },
    containerAluno: {
        padding: 2,
        marginLeft: 15,
        marginTop: 15,
        backgroundColor: 'linear-gradient(93.11deg, rgba(189, 0, 255, 0.25) 0%, rgba(89, 0, 235, 0.25) 51.04%, rgba(37, 0, 224, 0.25) 100%)',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
        borderRadius: 15,
        width: '35vh',
        height: '8vh',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
})
