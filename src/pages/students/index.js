import React from 'react'
import {View} from 'react-native'
import Card from '../../components/card';
import HeaderStudents from '../../components/header-students';

export default function Alunos(){

return(

    <View>
        <HeaderStudents/>
        <Card
            imagem={'dbdbo'}
            nome={'dbdbo'}
            turma={'dbdbo'}
        />
    </View>


);


}