import { View,} from 'react-native';
import {styles} from './styles';

import Titulo from './Titulo'
import Multiplicador from './Multiplicador'

function App(){
  return(
    <View style={styles.area}>
      <Titulo/>
      <Multiplicador/>
    </View>
  );
}

export default App;
