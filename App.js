import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from 'expo';

import Header from './components/Header';
import PantallaJuego from './pantallas/PantallaIniciarJuego';
import PantallaResultado from './pantallas/PantallaResultadosJuego';
import PantallaGameOver from './pantallas/GameOver';
import * as Fonts from 'expo-font';


const fetchFont = () =>{
  
  return Fonts.loadAsync({
  
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [roundsJugados, setRoundsJugados] = useState(0);
  const [datosCargados, setDatosCargados] = useState(false);

  if(!datosCargados){
    return <AppLoading 
              startAsync={fetchFont} 
              onFinish={()=>setDatosCargados(true)}
              onError={err=>console.log(err)} 
            />
  }

  const comenzarJuegoHandler = (numeroSelecionado) => {
    setUserNumber(numeroSelecionado);
    setRoundsJugados(0);
  }
  const gameOverHandler= numeroDeRounds =>{
    setRoundsJugados(numeroDeRounds);
  }
  let contenido=  <PantallaJuego onStartGame ={comenzarJuegoHandler } />;
  if(userNumber && roundsJugados<=0){
    contenido=<PantallaResultado numElegido={userNumber} onGameOver={gameOverHandler}/>
  }
  else if(roundsJugados>0){
    contenido=<PantallaGameOver />
  }
  return (
    <View style={styles.pantalla} >
        <Header title='Adivinador'/>
       {contenido}
    </View>
  );
}

const styles = StyleSheet.create({
    pantalla:{
      flex:1,
    },
});
