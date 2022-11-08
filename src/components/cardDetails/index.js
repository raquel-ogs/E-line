import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, } from 'react-native';

export default function Card({data}){
    return(
        <View style={styles.containerCard}>
            <ImageBackground style={{
            width: '100%',
            height: '100%',
        }} imageStyle={{
            width: '104%',
            transform: 'rotate(1.1deg)',
            borderRadius: 25,
            marginLeft: -7

        }} source={require('./../../img/Vector_6.png')}>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <View>
                        <Image style={{width: '10vh', height: '10vh', marginTop: '-1.2vh', marginLeft: '-5vh'}} source={require(`./../../img/${data.imagem}`)}/>
                    </View>
                    <View>
                        <Text style={{ fontFamily: 'Trap-SemiBold', fontSize: 14}}>
                            {data.turma} 
                        </Text>
                        <Text style={{fontFamily: 'Trap-Bold', fontSize: '1.1rem', color: '#720CF7', marginTop: 3.5}}> 
                            {data.nome}
                        </Text>
                    </View>                  
                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    containerCard: {
        padding: 2,
        marginLeft: 15,
        marginTop: 20,
        backgroundColor: 'linear-gradient(93.11deg, rgba(189, 0, 255, 0.25) 0%, rgba(89, 0, 235, 0.25) 51.04%, rgba(37, 0, 224, 0.25) 100%)',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
        borderRadius: 15,
        width: '35vh',
        height: '9vh',
    },
})
