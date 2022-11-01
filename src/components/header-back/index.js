import React from 'react';
import { useNavigation } from "@react-navigation/native";
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { Feather} from '@expo/vector-icons';
import StackRoutes from '../../routes/StackRoutes';

export default function HeaderBack(){
    const navigate = useNavigation();

    function navigateBack() {
        navigate.goBack();
    }

    return(
        <View style={styles.header}>
            <TouchableOpacity onPress={navigateBack}>
                <Feather name="arrow-left" size={32} color="black" />
            </TouchableOpacity>
            <Text style={styles.logo}> E-LINE </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height: '12vh',
        padding: 25,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: 'transparent'

    },
    logo:{
        fontFamily: 'Trap-Light',
        fontSize: '25px',
        color: 'black'
        
    }

})
