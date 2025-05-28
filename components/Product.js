import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Product = (props) => {
  return (
    <View style={styles.items} >
      <Text style={styles.elements} > {props.name}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      padding : 40,
      paddingTop: 60
    },
    items: {
      marginTop: 10,
    },
    elements: {
      backgroundColor: '#00ffff',
      padding: 20,
      fontSize: 17,
      marginVertical: 6
    },
  
    
  });

export default Product

