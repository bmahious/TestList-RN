import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import Product from './components/Product';

export default function App() {
  const [product, setProduct] = useState('');
  const [myProduct, setMyProduct] = useState([]);
  const inputHandler = (value) => {
    setProduct(value)
  }
  // const handlePress = () => {
  //   setMyProduct(currentMyProduct => [...currentMyProduct, product]);
  //   setProduct('');
  // }
  const handlePress = () => {
    const idString = Date.now().toString()
    setMyProduct(currentMyProduct => [{key: idString, name: product}, ...currentMyProduct]);
    setProduct('');
  }
  return (
    <View style={styles.container}> 
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.textInput} 
            placeholder='Nouveau Produit' 
            onChangeText={inputHandler} 
            value={product}
          />
          <Button 
            title='Valider'
            onPress={handlePress}
          />
        </View>
        <FlatList 
          data={myProduct}
          renderItem={({item}) => <Product name={item.name}/>}
        
        />
        {/* <ScrollView>
          <View style={styles.items}>
            {
              myProduct.map((item, index) => {
                return (
                  <Text style={styles.elements} key={index}> {item}</Text>
                )
              } )
            }
          </View>
        </ScrollView> */}
        
      <StatusBar style ="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding : 40,
    paddingTop: 60
  },
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
  },
  buttonInputR: {
    backgroundColor: 'red',
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    flexGrow: 1
  }
  
});
