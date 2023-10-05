import { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import {styles} from './styles'




export default function App(){
  const [n1, setN1] = useState()

function Revelar(){
  setN1(Math.floor(Math.random() * 11))
}
  return(
    <View>
      <Text style={styles.titulo}>Jogo do n° Aleatório </Text>
      <Text> </Text>
      <Text style={styles.contador}>Pense em um n° de 0 a 10  </Text>
      <Text> </Text>
      <Text style={styles.contador2}>{n1}</Text>
      <Text> </Text>

      <Button title='Descobrir' color='red' onPress={Revelar}/>
    </View>
  )
}
