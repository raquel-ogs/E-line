import { useNavigation } from '@react-navigation/native';
import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Button} from 'react-native';
import firebase from '../../firebaseConnection'



export default function Home(){
const [nome,setNome] = useState ('');

useEffect(()=>{

async function buscarNome(){

 await firebase.database().ref('Alunos/1/nome').on('value',(snapshot)=> {
       setNome(snapshot.val())
 });

}
buscarNome();

},[])


return(

    <View style = {{alignItems:'center'}}>

      <Text>{nome}</Text>
            
    </View>


);


}

const styles = StyleSheet.create({

    botao:{
        backgroundColor:'green',
        width:'80%',
        alignItems:"center",
        marginTop:10
    }

}
)