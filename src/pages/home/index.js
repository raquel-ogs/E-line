import { useNavigation } from '@react-navigation/native';
import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View, } from 'react-native';
import firebase from '../../../config'
import Header from '../../components/header-home';
import listarAluno from '../../components/list';
import Icons from '../../components/icons';
import { FlatList } from 'react-native-gesture-handler';

export default function Home(){

const [alunos, setAlunos] = useState([]);

useEffect(()=>{
    async function buscarAlunos(){
        await firebase.database().ref('Alunos').on('value',(snapshot)=> {
            snapshot.forEach((childItem) => {
                var data = {
                    key: childItem.key,
                    nome: childItem.val().Nome,
                    turma: childItem.val().Turma,
                    nota1: childItem.val().Nota1,
                    nota2: childItem.val().Nota2,
                    nota3: childItem.val().Nota3,
                    imagem: childItem.val().Imagem,

                };
                setAlunos(alunos=>[...alunos,data]);
            })
        });
}

buscarAlunos();

},[])


return(
     <View style = {{alignItems:'center'}}>
        <Header/>
        <Icons/>
        <View style={{width: '80%', paddingTop: 25}}>
            <Text style={styles.title}>
                Alunos recentes
            </Text>
        </View>
        <FlatList 
            data = {alunos}
            numColumns= {2}
            keyExtractor= {(item) => item.key}
            renderItem = {({item}) => 
                <listarAluno/>
            }
        />
     </View>

);


}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Trap-Bold',
        fontSize: 21
    },  
})