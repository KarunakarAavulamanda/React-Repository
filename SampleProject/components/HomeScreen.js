import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAddToCart = (productId) => {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
      setCart([...cart, productToAdd]);
      console.log("Product added to cart: ", productToAdd);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>A1 Products using dummy API</Text>
      <View style={styles.space} />
      <ScrollView style={styles.scrollView}>
        {products.map(product => (
          <View key={product.id} style={styles.productContainer}>
            <Text style={styles.productTitle}>{product.title}</Text>
            <Image
              source={{ uri: product.image }} 
              style={{ width: 300, height: 300 }}
            />
            <Text style={styles.productPrice}>Price: ${product.price}</Text>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => handleAddToCart(product.id)}
            >
              <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10, 
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 10,
  },
  space: {
    height: 20, 
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  productContainer: {
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 5,
  },
  addToCartButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});