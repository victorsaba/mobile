import { View, Text } from 'react-native';

import {styles} from './styles';

function Formacao(){
  return(
    <View style={styles.area}>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Formação</Text>
      <Text style={styles.textoDois}>Ator, Musico, Multi Instrumentista</Text>
    </View>
  )
}

export default Formacao