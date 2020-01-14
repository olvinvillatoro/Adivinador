import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import Card from '../components/Card'


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
    const {numElegido, onGameOver} = props;
    const [currentGuess, setCurrentGuess] = useState(generarNumeroRandom(1, 100, numElegido));
    const [rounds, setRounds] = useState(0)
    const menorActual = useRef(1);
    const altoActual = useRef(100);

    
    useEffect(() => {
        if (currentGuess === numElegido ) {
            onGameOver(rounds);
        }

    }, [currentGuess, numElegido, onGameOver])
    
        const siguienteAdivinado = direccion => {
            setRounds(
                curRounds =>{
                    curRounds+1;
                }
            );
            if((direccion==='menor' && currentGuess<numElegido) || (direccion==='mayor' && currentGuess>numElegido)){
                Alert.alert('mañozo', 'Ese es un numero malo', [{text:'Okay', style:'cancel'}]);
                return;
            }
            if(direccion==='menor'){
                altoActual.current=currentGuess;
            }
             else{
                 menorActual.current=currentGuess;
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
                <Button title="Bajar" onPress ={ siguienteAdivinado.bind(this, 'menor')}/>
                <Button title="Subir" onPress ={ siguienteAdivinado.bind(this, 'mayor')}/>
                </Card>
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
