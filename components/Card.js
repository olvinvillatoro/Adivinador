import React from 'react';
import {View, StyleSheet} from 'react-native';

export default Card= (props) => {
  return(
      <View style={{...styles.card,  ...props.style}}>
            {props.children}
      </View>
  );
}

const styles=StyleSheet.create({
    card:{

        padding:25,
        
        shadowColor:'#777',
        shadowOffset:{
            height:4,
            width:4,
        },
        shadowOpacity:0.5,
        shadowRadius:6,
        backgroundColor:'#8CD1CA',

        elevation:9,
        borderRadius:8,
        
    },
    
});
