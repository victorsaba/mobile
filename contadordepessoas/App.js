import { View, Text } from 'react-native';
import {styles} from './styles';

import Titulo from './Titulo'
import Contador from './Contador'
function App(){
  return(
    <View style={styles.area}>
      <Titulo/>
      <Contador />
    </View>
  );
}

export default App;