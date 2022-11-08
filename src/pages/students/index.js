import React from 'react'
import {View, FlatList} from 'react-native'
import Card from '../../components/cardStudents';
import HeaderStudents from '../../components/header-students';

export default function Alunos(){

return(
    <View>
        <HeaderStudents/>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={alunos}
        keyExtractor= {({item}) => item.key}
        renderItem = { ({item}) => (
            <Card data={item}/>
        )}
        
        />
    </View>


);


}