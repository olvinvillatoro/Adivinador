import React from 'react' ;
import {View, Text, StyleSheet, Image} from 'react-native'

export default Puntuacion = (props) => {
    return(
        <View style={styles.puntuacion}>
            
                <Image  style={styles.imagen}
                fadeDuration={700}
                // Imagenes Locales
                // source={require('../assets/inicio.png')}
                source={{uri:'https://i.pinimg.com/originals/4e/1d/de/4e1ddecb721948fe848dfab50cfc93d3.jpg'}}
                resizeMode="cover"
                 />
            
        </View>
    );
  
}

const styles = StyleSheet.create({
    puntuacion:{
        flex:1,
        width:400,
        height:400,
        maxWidth:'80%',
        backgroundColor:'powderblue',
        borderWidth:3,
        alignItems:'center',
        borderRadius:200,
        overflow:'hidden'
        
    },
    texto:{
        color:'red',
    },
    imagen:{
        width:'100%',
        height:'100%',
        
        

    },
    
});
