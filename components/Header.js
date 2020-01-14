import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colores from '../constant/Colores'

export default Header= (props) => {
    
    return(
        <View style={styles.header}>
           
                <Text style={styles.headerTitulo}>
                    {props.title}
                </Text>
           
        </View>
    );
}

const styles= StyleSheet.create({
    header:{
        width:'100%',
        height:90,
        paddingTop:36,
        backgroundColor:Colores.colorPrincipal,
        alignItems:'center',
        justifyContent:'center'
    },
    headerTitulo:{
        color:'black',
        fontSize:18,
        fontFamily:'open-sans-bold'   
    }
});