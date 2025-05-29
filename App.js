import { StatusBar } from 'expo-status-bar';
import React, {useState,} from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
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
  const removeItem = (key) => {
    setMyProduct((currentMyProduct) => {
        return currentMyProduct.filter(product => product.key != key)
    } )
  }
  return (
    <View style={styles.container}> 
        <AddProduct handlePress={handlePress} />
        <FlatList 
          data={myProduct}
          renderItem={({item}) => (
             <Product  
             removeItem={removeItem} 
             name={item.name}
             stringId={item.key} 
             />
          )}
        
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
