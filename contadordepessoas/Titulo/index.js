import { Text, View} from 'react-native';
import {styles} from './Styles';

export default function Titulo() {
  return (
    <View>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto ,styles.fonte]}>
      Contador de pessoas
      </Text>
    </View>
  );
}

