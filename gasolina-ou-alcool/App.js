import { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import {styles} from './styles'




export default function App(){
  const [n1, setN1] = useState()
  const [n2, setN2] = useState()
  const [melhor, setMelhor] = useState()

  function CalcularPreco(){
    r = n1 / n2
    if (r > 0.7){
      setMelhor("Gasolina é melhor")
    }else{
      setMelhor("etanol é melhor")
    }
  }


  return(
    <View>
      <Text style={styles.titulo}>Alcool ou Gasolina</Text>


      <TextInput
      style={styles.input}
      placeholder="preço do Alcool"
      onChangeText={setN1}
      />


      <TextInput
      style={styles.input}
      placeholder="preço da Gasolina"
      onChangeText={setN2}
      />




      <Button title='verificar' color='green' onPress={CalcularPreco}/>


      <Text style={styles.contador2}>{melhor}</Text>
    </View>
  )
}
