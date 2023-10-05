import {View, Text, Image} from 'react-native'

import myImage from '../assets/snack-icon.png';
import {styles} from './styles';

export default function Foto(){
  
  return(
    <View style={styles.alinhaFoto}>
      <Image  source={{ uri: 'https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_b77a431b.jpeg?region=0%2C0%2C450%2C450'}} style={{ width: 200, height: 200 }} />
    </View>
  )
}