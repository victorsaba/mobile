import { Text, View} from 'react-native';
import {styles} from './styles';

export default function Titulo() {
  return (
    <View>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto ,styles.fonte]}>
      Multiplicador de Numeros
      </Text>
    </View>
  );
}