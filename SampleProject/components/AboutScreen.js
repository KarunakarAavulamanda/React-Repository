import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import productsData from './products.json';

const AboutScreen = () => {

  const handleAddToCart = (productId) => {
    // Implement your logic to add the product to cart
    console.log(`Product ${productId} added to cart`);
    
  };

  return (
    
    <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>A2 Products using json file</Text>
      {productsData.map(product => (
        <View key={product.id} style={styles.productContainer}>
          <Image source={{ uri: product.image }} style={styles.productImage} />
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productDetails}>{product.details}</Text>
          <Text style={styles.productPrice}>Price: ${product.price}</Text>
          <TouchableOpacity onPress={() => handleAddToCart(product.id)} style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}; 

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  productContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  productImage: {
    width: 330,
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  productDetails: {
    fontSize: 16,
  },
  productPrice: { // Style for price text
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  addToCartButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default AboutScreen;
