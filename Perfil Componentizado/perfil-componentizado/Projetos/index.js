import { View, Text } from 'react-native';

import {styles} from './styles';

function Projetos(){
  return(
    <View style={styles.area}>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Projetos</Text>
      <Text style={styles.textoDois}>Muppets/Muppets o Filme/Muppets 2</Text>
    </View>
  )
}

export default Projetos