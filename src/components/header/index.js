import {Text, Image, ImageBackground, View, StyleSheet, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.fundo}>
                <ImageBackground style={{
                    width: '100%',
                    height: '100%'
                }}
                imageStyle={{
                        marginTop: '4vh',
                        width:'100%',
                        height: '70%',
                        }}
                        source={require('./../../img/Vector.png')}>
                    <View style={styles.info}>
                        <Text style={{
                            fontFamily: 'Trap-Light',
                            fontSize: '2.8vh',
                            color: 'white',}}>
                            E-LINE
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
                    <View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "25vh",
        backgroundColor: '#FCFCFC',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.15)',
        borderBottomStartRadius: 40,
        borderBottomEndRadius: 40        
    },
    fundo:{
        width: '100%',
        height: '100%',
        backgroundColor: 'linear-gradient(180deg, rgba(37, 0, 224, 0.6) 0%, rgba(0, 0, 202, 0.65) 100%)',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomStartRadius: 40,
        borderBottomEndRadius: 40
    },
    info:{
        width: '100%',
        padding: 25,
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imgConta:{
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        width: '6vh',
        height: '6vh',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%'
    },
    input:{
        borderColor: '#200'
    }
});

