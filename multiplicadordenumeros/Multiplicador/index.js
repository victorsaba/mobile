import React, { Component, useState } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import {styles} from './styles';


function App(){
  const [numero1, setNum1] = useState()
  const [numero2, setNum2] = useState()
  const [resultado, setResult] = useState()
  


  function Multiplica(){
    if (numero1 && numero2 > 0){
      setResult(numero1 * numero2);
    }else{
      alert ('digite um numero')
    }
  }




  return(
    <View>

    <TextInput
    style={styles.input}
    placeholder="Digite o primeiro numero"
    onChangeText={setNum1}
    />
    <TextInput
    style={styles.input}
    placeholder="Digite o segundo numero"
    onChangeText={setNum2}
    />


    <Button title="Multiplicar" onPress={Multiplica} />


    <Text style={styles.texto}>{resultado} </Text>
    </View>
  );
}









export default App;