import { View, Text } from 'react-native';

import {styles} from './styles';

function Experiencia(){
  return(
    <View style={styles.area}>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Experiencia</Text>
      <Text style={styles.textoDois}>Ator e Musico desde 1955</Text>
    </View>
  )
}

export default Experiencia