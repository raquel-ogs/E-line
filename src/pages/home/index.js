import { useNavigation } from '@react-navigation/native';
import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import {MaterialIcons, Feather,} from '@expo/vector-icons'
import firebase from '../../../config'
import Header from '../../components/header';

export default function Home(){
const [nome,setNome] = useState ('');
const [idade,setIdade] = useState ('');


useEffect(()=>{

async function buscarDados(){

    await firebase.database().ref('Alunos/1/nome').on('value',(snapshot)=> {
        setNome(snapshot.val())
    });
    await firebase.database().ref('Alunos/1/idade').on('value',(snapshot)=> {
        setIdade(snapshot.val()) 
    });

}

buscarDados();

},[])


return(
     <View style = {{alignItems:'center'}}>
        <Header/>
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerIcon}>
                <View style={styles.icon}>
                    <MaterialIcons name="add" size={'3.7vh'} color="#720CF7" />
                </View>
                <View>
                    <Text style={{fontFamily: 'Trap-Bold', fontSize: 13, marginTop: 10}}> Adicionar</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerIcon}>
                <View style={styles.icon}>
                    <Feather name="edit" size={'3.2vh'} color="#720CF7" />
                </View>
                <View>
                    <Text style={{fontFamily: 'Trap-Bold', fontSize: 13, marginTop: 10}}> Editar </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerIcon}>
                <View style={styles.icon}>
                    <Feather name="trash" size={'3.2vh'} color="#720CF7" />
                </View>
                <View>
                    <Text style={{fontFamily: 'Trap-Bold', fontSize: 13, marginTop: 10}}> Excluir </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerIcon}>
                <View style={styles.icon}>
                    <Feather name="clipboard" size={'3.2vh'} color="#720CF7" />
                </View>
                <View>
                    <Text style={{fontFamily: 'Trap-Bold', fontSize: 13, marginTop: 10}}> Listar </Text>
                </View>
            </TouchableOpacity>
        </View>
         {/* <Text>{nome}</Text>
         <Text>{idade}</Text> */}
     </View>

);


}

const styles = StyleSheet.create({
    container:{
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 30
    },
    containerIcon:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        backgroundColor: 'linear-gradient(180deg, rgba(114, 12, 247, 0.3) 0%, rgba(37, 0, 224, 0.5) 100%)',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.08)',
        width: '7vh',
        height: '7vh',
        alignItems:"center",
        justifyContent: 'center',
        borderRadius: 50,     
        
    }

}
)