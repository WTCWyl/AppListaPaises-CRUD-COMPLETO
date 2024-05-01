// CadastrarPaisScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';


const CadastrarPaisScreen = () => {
  const [nomePais, setNomePais] = useState('');
  const [capital, setCapital] = useState('');

  const criarPais = async () => {
    try {
      const response = await axios.post('http://localhost:8080/pais', {
        nome: nomePais,
        capital: capital
      });
      console.log('Pais criado!:', response.data);
    } catch (error) {
      console.error('Erro ao criar país: o erro é:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Tela de Cadastro de País</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do País"
        value={nomePais}
        onChangeText={(text) => setNomePais(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Capital"
        value={capital}
        onChangeText={(text) => setCapital(text)}
      />
      <Button title="Salvar" onPress={criarPais} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  btn: {
    backgroundColor: '#808080',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8, // Espaço entre os botões
  },
});

export default CadastrarPaisScreen;
