import React, {useState} from 'react';
import {View, Text,TouchableWithoutFeedback, Button, StyleSheet, Keyboard, Alert} from 'react-native';

//Componentes importados
import Card from '../components/Card';
import Colores from '../constant/Colores';
import Input from '../components/Input';
import Puntuacion from '../components/Puntuacion';
import BotonPrincipal from '../components/BotonPrincipal';

export default PantallaInciarJuego = (props)=>{

    const [valorIngresado, setValorIngresado] = useState('');
    const [confirmarInput, setConfirmarInput] = useState(false);
    const [numeroSeleccionado, setNumeroSeleccionado] = useState();


    const valorIngresadoHandler = (valor)=>{
        setValorIngresado(valor.replace(/[^0-9]/g,''));
    }

    const resetInputHandler = () => {
        setValorIngresado('');
        setConfirmarInput(false);
    }



    const confirmarInputHandler = () => {
        
        const numero =parseInt(valorIngresado);
        
        if(isNaN( numero) || numero<=0|| numero >99){
            Alert.alert('Numero No Valido','El numero debe estar entre 1 y 99', [{text:'Okay', style:'destructive', onPress:resetInputHandler}]);
            return;
        }

        setConfirmarInput(true);
        setNumeroSeleccionado(numero)
        setValorIngresado('');
     ;
    }

    let confirmarSalida;
    if(confirmarInput){
    confirmarSalida = <Text>numero elegido : {numeroSeleccionado}</Text>
    }

    return(
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <View style={styles.pantalla}>
            <Text style={styles.titulo}>Comenzar!!</Text>
            <Card style={styles.inputContainer}>
                <Text>Selectione un <Text style={styles.colorRojo}> numero</Text></Text>
                <Input maxLength={2} 
                        blurOnFocus
                        tyle={styles.input}
                        keyboardType='number-pad'
                        onChangeText={valorIngresadoHandler}
                        value={valorIngresado}   />
             
                <View style={styles.contenedorBotones}>
                    <View style={styles.boton}>
                        <Button title='Restablecer' onPress={resetInputHandler } color={Colores.colorSecundario} />
                    </View>
                    <View style={styles.boton}>
                        <Button title={'Confirmar'} onPress={confirmarInputHandler}  color={Colores.colorPrincipal}/> 
                    </View>
                    
                    
                </View>
            </Card>
            <View style={styles.comenzar}>
                <BotonPrincipal onPress={()=>{props.onStartGame(numeroSeleccionado)}}>
                    Comenzar
                </BotonPrincipal >
                {/*Forma Original de comenzar el juego
                 <Button title='Comenzar' style={{color:'grey'}} onPress={()=>{props.onStartGame(numeroSeleccionado)}}/> */}
            </View>
            <Puntuacion titulo={numeroSeleccionado} />
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles=StyleSheet.create({
    pantalla:{
        flex:1,
        padding:10,
        alignItems:'center',
       

    },
    contenedorBotones:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between'
    },
    titulo:{
        fontSize:20,
        marginVertical:10,
        fontFamily: 'open-sans-bold',
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
    },
    boton:{
        width:107,
        flexDirection:'column-reverse'
    },
    input:{
        width:50,
        textAlign:'center'
    },

    comenzar:{
        marginVertical:20,
        width:150,
    },
    colorRojo:{
        color:'red'
    }
    
});
