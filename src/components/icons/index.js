import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import {MaterialIcons, Feather,} from '@expo/vector-icons'

export default function Icons(){

    const navigation = useNavigation();

    function navigateToSignUp() {
        navigation.navigate('Cadastrar');
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerIcon} onPress={navigateToSignUp}>
                <View style={styles.icon}>
                    <MaterialIcons name="add" size={'3.7vh'} color="#720CF7" />
                </View>
                <View>
                    <Text style={{fontFamily: 'Trap-Bold', fontSize: 13, marginTop: 10}}> Adicionar</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerIcon}>
                <View style={styles.icon}>
                    <Feather name="edit" size={'3.2vh'} color="#720CF7" />
                </View>
                <View>
                    <Text style={{fontFamily: 'Trap-Bold', fontSize: 13, marginTop: 10}}> Editar </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerIcon}>
                <View style={styles.icon}>
                    <Feather name="trash" size={'3.2vh'} color="#720CF7" />
                </View>
                <View>
                    <Text style={{fontFamily: 'Trap-Bold', fontSize: 13, marginTop: 10}}> Excluir </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerIcon}>
                <View style={styles.icon}>
                    <Feather name="clipboard" size={'3.2vh'} color="#720CF7" />
                </View>
                <View>
                    <Text style={{fontFamily: 'Trap-Bold', fontSize: 13, marginTop: 10}}> Listar </Text>
                </View>
            </TouchableOpacity>
        </View>
        );

}

const styles = StyleSheet.create({
    container:{
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 30
    },
    containerIcon:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        backgroundColor: 'linear-gradient(180deg, rgba(114, 12, 247, 0.3) 0%, rgba(37, 0, 224, 0.05) 100%)',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.08)',
        width: '7vh',
        height: '7vh',
        alignItems:"center",
        justifyContent: 'center',
        borderRadius: 50,     
        
    }

}
)