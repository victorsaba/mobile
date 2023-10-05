import { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import {styles} from './styles'




export default function App(){
  const [n1, setN1] = useState()
  const [n2, setN2] = useState()
  const [IMC, setIMC] = useState()

  function CalcularPreco(){
    r = n1 / (n2 * n2)
    if (r < 18.5){
      setIMC("Abaixo do peso")
    }else if(r < 24.9){
      setIMC("Peso normal")
    }else if(r < 29.9){
      setIMC("Sobre peso")
    }else if(r < 34.9){
      setIMC("Obesidade grau I")
    }else if(r < 39.9){
      setIMC("Obesidade grau II")
    }else{
      setIMC("Obesidade morbida")
    }
  }


  return(
    <View>
      <Text style={styles.titulo}>Calculo do IMC </Text>


      <TextInput
      style={styles.input}
      placeholder="Peso"
      onChangeText={setN1}
      />


      <TextInput
      style={styles.input}
      placeholder="Altura"
      onChangeText={setN2}
      />




      <Button title='verificar' color='blue' onPress={CalcularPreco}/>


      <Text style={styles.contador2}>{IMC}</Text>
    </View>
  )
}