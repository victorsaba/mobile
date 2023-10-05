import { View, Text } from 'react-native';
import {styles} from './styles';

import DadosPessoais from './DadosPessoais'
import Formacao from './Formacao'
import Foto from './Foto'
import Experiencia from './Experiencia'
import Projetos from './Projetos'
 
function App(){
  return(
    <View style={styles.area}>
      <Foto />
      <DadosPessoais />
      <Formacao />
      <Experiencia />
      <Projetos/>
    </View>
  );
}

export default App;
