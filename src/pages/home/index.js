import { useNavigation } from '@react-navigation/native';
import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View,  FlatList } from 'react-native';
import firebase from '../../../config'
import Header from '../../components/header-home';
import listarAluno from '../../components/list';
import Icons from '../../components/icons';

export default function Home(){

    const [nome,setNome] = useState ('');

useEffect(()=>{

async function buscarNome(){

 await firebase.database().ref('Alunos/-NFE2-3P2oNKIc5N5NN6/Nome').on('value',(snapshot)=> {
       setNome(snapshot.val())
 });

}
buscarNome();

},[])
const [turma,setTurma] = useState ('');

useEffect(()=>{

async function buscarTurma(){

 await firebase.database().ref('Alunos/-NFE2-3P2oNKIc5N5NN6/Turma').on('value',(snapshot)=> {
       setTurma(snapshot.val())
 });

}
buscarTurma();

},[])

const [alunos, setAlunos] = useState([]);

useEffect(()=>{
    async function buscarAlunos(){
        await firebase.database().ref('Alunos').on('value',(snapshot)=> {
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
                data = {alunos}
                numColumns= {2}
                keyExtractor= { (item) => item.Key}
                renderItem = { ({item}) => (
                    <listarAluno 
                    turma={item.turma}
                    nome={item.nome}
                    />
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
})