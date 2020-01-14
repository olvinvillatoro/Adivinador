import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colores from '../constant/Colores';


const BotonPrincipal = (props) => {
    
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View  style={styles.button}>
                <Text style={styles.buttonText}>
                    {props.children}
                </Text>
                            </View>
        </TouchableOpacity>
    );
}

export default BotonPrincipal;
const styles= StyleSheet.create({
    button:{
        backgroundColor:Colores.colorPrincipal,
        paddingVertical:12,
        paddingHorizontal:30,
        borderRadius:25,

    },
    buttonText:{
        color:'grey',
        fontFamily:'open-sans',
        fontSize:18
    },

});

