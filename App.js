import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import Product from './components/Product';
import AddProduct from './components/AddProduct';

export default function App() {
  const [myProduct, setMyProduct] = useState([]);
 
  // const handlePress = () => {
  //   setMyProduct(currentMyProduct => [...currentMyProduct, product]);
  //   setProduct('');
  // }
  const handlePress = (product) => {
    const idString = Date.now().toString()
    setMyProduct(currentMyProduct => [{key: idString, name: product}, ...currentMyProduct]);
  }
  return (
    <View style={styles.container}> 
        <AddProduct handlePress={handlePress} />
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
  
});
