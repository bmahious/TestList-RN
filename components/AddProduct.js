import React, {useState, useEffect} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';


const AddProduct = (props) => {
      const [product, setProduct] = useState('');
      
      const inputHandler = (value) => {
        setProduct(value);
        //setProduct('');
      };
      const handleClick = () => {
        props.handlePress(product);
        setProduct('')
      }
    
  return (
    <View style={styles.inputContainer}>
          <TextInput 
            style={styles.textInput} 
            placeholder='Nouveau Produit' 
            onChangeText={inputHandler} 
            value={product}
          />
          <Button 
            title='Valider'
            onPress={handleClick}
        
            //onPress={() => props.handlePress(product, setProduct)}
          />
    </View>
  )
}
const styles = StyleSheet.create({
   
    inputContainer: {
      flexDirection: 'row'
    },
    textInput: {
      borderColor: 'grey',
      borderWidth: 1,
      padding: 5,
      paddingLeft: 9,
      fontSize: 18,
      flexGrow: 1
    } 
    
  });
export default AddProduct
