import { StatusBar } from 'expo-status-bar';
import React, {useState,} from 'react';
import { StyleSheet, View, FlatList, Alert, Modal, Text, Pressable } from 'react-native';
import Product from './components/Product';
import AddProduct from './components/AddProduct';

export default function App() {
  const [myProduct, setMyProduct] = useState([]);
  const [show, setShow] = useState(false);
  
  // const handlePress = () => {
  //   setMyProduct(currentMyProduct => [...currentMyProduct, product]);
  //   setProduct('');
  // }
  const handlePress = (product) => {
    if (product.length > 1) {
        const idString = Date.now().toString()
        setMyProduct(currentMyProduct => [{key: idString, name: product}, ...currentMyProduct]);     
    } else {
      setShow(true)
    }

  }
  const removeItem = (key) => {
    setMyProduct((currentMyProduct) => {
        return currentMyProduct.filter(product => product.key != key)
    } )
  }
  return (
    <View style={styles.container}> 
      <Modal
        visible={show}
        onRequestClose={() => setShow(false)}
        animationType='slide'
        hardwareAccelerated
        transparent
      >
        <View style={styles.ModalContainer} >
          <View style={styles.ModalContent} >
            <View style={styles.ModalHeader}>
              <Text style={styles.headerText} >Oups !!</Text>
            </View>
            <View style={styles.ModalBody}>
              <Text style={styles.bodyText} >Veuillez indiquez au moins 2 caractères</Text>
            </View>
            <View style={styles.ModalFooter}>
              <Pressable 
              style={styles.pressBtn} 
              onPress={() => setShow(false)}
              >
                <Text style={styles.footerText} >Reprendre la liste</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
  ModalContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.2)'
  },
  ModalContent : {
    backgroundColor: '#fff',
    width: '90%',
    height: 250,
    borderRadius: 15,
    alignItems: 'center'
  },
  ModalHeader : {
    width : '100%',
    padding : 16,
    alignItems : 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius : 15,
    borderBottomWidth : 1,
    borderBottomColor : 'lightgray'
  },
  headerText : {
    fontSize : 17,
  },
  ModalBody : {
    flex : 1,
    width : '100%',
    borderBottomLeftRadius : 15,
    borderBottomRightRadius : 15,
    alignItems : 'center',
    justifyContent : 'center'
  },
  bodyText : {
    fontSize : 17
  },
  ModalFooter : {
    width : '100%',
    // padding : 16,
    // alignItems : 'center',
    // borderBottomLeftRadius: 15,
    // borderBottomRightRadius : 15,
    // borderTopWidth : 1,
    // borderBottomColor : 'lightgray'
  },
  footerText : {
    fontSize : 17,
    textAlign : 'center'
  },
  pressBtn : {
    backgroundColor : 'lightseagreen',
    color : '#fff',
    padding : 16,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius : 15,
  }
});
