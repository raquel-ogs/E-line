import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function listarAluno(){
    return(
        <TouchableOpacity style={styles.containerAluno}>
            <View>
                <View>
                    <Text style={styles.subtitleAlunos}>
                        3°QUi
                    </Text>
                    <Text style={styles.titleAlunos}>
                         Kellen Neves
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
    containerAluno: {
        padding: 2,
        marginTop: 15,
        backgroundColor: 'linear-gradient(93.11deg, rgba(189, 0, 255, 0.25) 0%, rgba(89, 0, 235, 0.25) 51.04%, rgba(37, 0, 224, 0.25) 100%)',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
        borderRadius: 15,
        width: '80%',
        height: '9vh',
        borderRadius: 15
    },
    titleAlunos: {
        fontFamily: 'Trap-Bold',
        fontSize: 19,
        color: '#720CF7'

    },
    subtitleAlunos: {
        fontFamily: 'Trap-Regular',
        fontSize: 15,
    }
})