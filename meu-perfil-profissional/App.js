import React from 'react';
import { View, Text, Image } from 'react-native';


function App(){
  return(
     <View>
        <Text style={{color: '#39FF14', fontSize: 25, margin: 15, fontWeight: 'bold'}}>
          Meu Perfil Profissional
        </Text>
       
        <Image
          source={{ uri: 'https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_b77a431b.jpeg?region=0%2C0%2C450%2C450'}}
          style={{ width: 300, height: 300}}
        />
            <Text style={{color: '#008000', fontSize: 20, margin: 15, fontWeight: 'bold'}}>
          Kermit, the Frog
        </Text>
          <Text style={{color: '#00000', fontSize: 15, margin: 15, fontWeight: 'bold'}}>
          Formação
        </Text>
         <Text style={{color: '#00000', fontSize: 15, margin: 15}}>
          Ator, Musico, Cantor, Multi Instrumentista
        </Text>
          <Text style={{color: '#00000', fontSize: 15, margin: 15, fontWeight: 'bold'}}>
          Experiência
        </Text>
         <Text style={{color: '#00000', fontSize: 15, margin: 15}}>
          Ator e Músico desde 1955
        </Text>
          <Text style={{color: '#00000', fontSize: 15, margin: 15, fontWeight: 'bold'}}>
          Projetos
        </Text>
         <Text style={{color: '#00000', fontSize: 15, margin: 15}}>
          Muppets/
          Muppets, O filme/
          Muppets 2
        </Text>        
      </View>
      
  )
}




export default App;

