import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default GameOver = () => {
  return(
      <View style={styles.pantalla}>
          <Text>Hey!</Text>
      </View>
  );
}

const styles= StyleSheet.create({
    pantalla:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'red'
    }
});
