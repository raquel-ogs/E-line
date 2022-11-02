import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default function Card({imagem, nome, turma}){
    return(
        <TouchableOpacity style={styles.containerAluno} onPress={navigateToDetails}>
            <ImageBackground style={{
            width: '100%',
            height: '100%',
        }} imageStyle={{
            width: '110%',
            transform: 'rotate(1.1deg)',
            borderRadius: 25,
            marginLeft: -7

        }} source={require('./../../img/Vector_6.png')}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                    <View>
                        <Image style={{width: '10vh', height: '10vh', marginTop: '-1.2vh'}} source={require(`./../../img/${imagem}`)}/>
                    </View>
                    <View>
                        <Text style={{ fontFamily: 'Trap-SemiBold', fontSize: 14}}>
                            {turma} 
                        </Text>
                        <Text style={{fontFamily: 'Trap-Bold', fontSize: '1.1rem', color: '#720CF7', marginTop: 3.5}}> 
                            {nome}
                        </Text>
                    </View>
                    <View>
                        <MaterialIcons name="keyboard-arrow-right" size={28} color="#720CF7" />
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    containerAluno: {
        padding: 2,
        marginLeft: 15,
        marginTop: 20,
        backgroundColor: 'linear-gradient(93.11deg, rgba(189, 0, 255, 0.25) 0%, rgba(89, 0, 235, 0.25) 51.04%, rgba(37, 0, 224, 0.25) 100%)',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
        borderRadius: 15,
        width: '37vh',
        height: '9vh',
    },
})
