import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert, ScrollView} from 'react-native';
import Card from '../components/Card';
import BotonPrincipal from '../components/BotonPrincipal';
import {Ionicons} from '@expo/vector-icons';



const generarNumeroRandom = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndmNum = Math.floor(Math.random()* (max - min)) + min;
    if (rndmNum===exclude){
        return generarNumeroRandom(min, max, exclude);
    }
    else return rndmNum;
        
}

export default PantallaResultadosJuego = (props) => {
    const initialGuess= generarNumeroRandom(1, 100, numElegido);
    const {numElegido, onGameOver} = props;
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuess, setPastGuess] = useState([initialGuess])
    const menorActual = useRef(1);
    const altoActual = useRef(100);

    
    useEffect(() => {
        if (currentGuess === numElegido ) {
            onGameOver(pastGuess.length);
        }

    }, [currentGuess, numElegido, onGameOver])
    
        const siguienteAdivinado = direccion => {
            // setRounds(
            //     curRounds =>{
            //         curRounds+1;
            //     }
            // );
            setPastGuess(prevState =>
                            [siguienteNumero,...prevState]
                );


            if((direccion==='menor' && currentGuess<numElegido) || (direccion==='mayor' && currentGuess>numElegido)){
                Alert.alert('mañozo', 'Ese es un numero malo', [{text:'Okay', style:'cancel'}]);
                return;
            }
            if(direccion==='menor'){
                altoActual.current=currentGuess;
            }
            else{
                menorActual.current=currentGuess+1;
            }
            const siguienteNumero = generarNumeroRandom(menorActual.current, altoActual.current, currentGuess);
            
            setCurrentGuess(siguienteNumero);
            
            
           
        }

        return(
            <View style={styles.container}>
                <Text>
                    {currentGuess}
                </Text>
                <Card style={styles.buttonContainer}>
                    <BotonPrincipal onPress ={ siguienteAdivinado.bind(this, 'menor')}>
                    <Ionicons name='md-remove' size={24} color ="white"/>
                    </BotonPrincipal>
                    <BotonPrincipal onPress ={ siguienteAdivinado.bind(this, 'mayor')}>
                    <Ionicons name='md-add' size={24} color ="white"/>
                    </BotonPrincipal>
                </Card>
                <ScrollView>
                    {pastGuess.map( guess => <View key={guess}><Text>{guess}</Text></View>) }
                </ScrollView>
            </View>
        );
  
}

const styles=StyleSheet.create({
    container:{
        width:600,
        height:900,
        maxHeight:'90%',
        maxWidth:'90%',
        
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:300,
        maxWidth:'80%',
    }
});
