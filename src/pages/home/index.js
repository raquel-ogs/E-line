import { useNavigation } from '@react-navigation/native';
import React,{useEffect, useState} from 'react'
import { StyleSheet, ScrollView, Text, View, FlatList,} from 'react-native';
import firebase from '../../../config'
import Header from '../../components/header-home';
import Icons from '../../components/icons';
import Card from '../../components/cardStudents';
export default function Home(){

const navigation = useNavigation();

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


function goDetails(){
    navigation.navigate('Detalhes', {dados : data});
}

return(
    <ScrollView>
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
            keyExtractor= { (item) => item.Key}
            renderItem = { ({item}) => (
                <Card data={item}/>
            )
        }
        />
        </View> 
     </View>
     </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 21
    },
})
