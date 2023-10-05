import { View, Text } from 'react-native';

import {styles} from './styles';

function DadosPessoais(){
  return(
    <View>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Dados Pessoais</Text>
      <Text style={styles.textoDois}>Kermit, The Frog</Text>
    </View>
  )
}

export default DadosPessoais