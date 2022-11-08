import {Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Header({nome}){
    return(
        <View style={styles.header}>
            <Text style={styles.text}> 
                {nome}
            </Text>
            <TouchableOpacity style={styles.imgConta}>
                <Image source={require('./../../img/Character.png')} style={{
                    width: '95%',
                    height: '100%',
                    borderRadius: '50%',
                    transform: 'matrix(-1, 0, 0, 1, 0, 0)',
                }}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        padding: 25,
        paddingTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text:{
        fontFamily: 'Poppins_700Bold',
        fontSize: 20,
        color: 'linear-gradient(90deg, rgba(37, 0, 224, 0.65) 0%, rgba(37, 0, 224, 0.65) 0.01%, rgba(89, 0, 235, 0.65) 100%)',                
    },
    imgConta:{
        backgroundColor: 'rgba(114, 12, 247, 0.25)',
        width: '6vh',
        height: '6vh',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%'
    }

});

