import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const addProduct = () => {
    if (id !== '' && description !== '' && price !== '' && quantity !== '') {
      const productExists = products.find((product) => product.id === id);

      if (productExists) {
        alert('Produto já cadastrado');
      } else {
        const newProduct = { id, description, price, quantity };
        setProducts([...products, newProduct]);
        setId('');
        setDescription('');
        setPrice('');
        setQuantity('');
      }
    } else {
      alert('Todos os campos são obrigatórios');
    }
  };

  const deleteProduct = () => {
    const index = products.findIndex((product) => product.id === id);

    if (index >= 0) {
      const newProducts = [...products];
      newProducts.splice(index, 1);
      setProducts(newProducts);
      setId('');
      setDescription('');
      setPrice('');
      setQuantity('');
    } else {
      alert('Produto não encontrado');
    }
  };

  const editProduct = () => {
    if (id !== '' && description !== '' && price !== '' && quantity !== '') {
      const index = products.findIndex((product) => product.id === id);

      if (index >= 0) {
        const newProduct = { id, description, price, quantity };
        const newProducts = [...products];
        newProducts.splice(index, 1, newProduct);
        setProducts(newProducts);
        setId('');
        setDescription('');
        setPrice('');
        setQuantity('');
      } else {
        alert('Produto não encontrado');
      }
    } else {
      alert('Todos os campos são obrigatórios');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={id}
          onChangeText={setId}
          placeholder="CÓDIGO"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="DESCRIÇÃO"
        />
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          placeholder="PREÇO"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={quantity}
          onChangeText={setQuantity}
          placeholder="QUANTIDADE"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={addProduct}>
          <Text style={styles.buttonText}>ADICIONAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={deleteProduct}>
          <Text style={styles.buttonText}>APAGAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={editProduct}>
          <Text style={styles.buttonText}>EDITAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        {products.map((product) => (
          <View style={styles.productItem} key={product.id}>
            <Text style={styles.listedItems}>[{product.id}] {product.description}</Text>
            <Text style={styles.listedItems}>Preço: R${product.price}</Text>
            <Text style={styles.listedItems}>Quantidade: {product.quantity}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCF',
  },
  inputContainer: {
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    width: "90%",
  },
  input: {
    placeholderTextColor: 'red',
    width: '100%',
    fontWeight: 'bold',
    textAlign: 'center',
    height: 40,
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5%',
    width: '100%',
    borderRadius: 2,
    marginBottom: 16,
    
  },
  button: {
    flex: 1,
    height: '100%',
    width: '30%',
    marginHorizontal: 5,
    backgroundColor: '#dea506',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 60,
  },
  buttonText: {
    fontWeight: 'bold',
    color:  'white',
  },
  productItem: {
    color: 'orange',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: "90%",
  },
  listContainer: {
    justifyContent: 'flex-end',
    allignItems: 'flex-end',
  },
  listedItems: {
    color: "gray",
  },

}

);
