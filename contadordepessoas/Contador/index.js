import { Text, View, Pressable } from 'react-native';
import { styles } from './Styles';
import React, { useState } from 'react';

export default function Contador() {
  const [contador, setcont] = useState(0);

  function Adiciona() {
    setcont(contador + 1);
  }
  function Subtrai() {
    setcont(contador - 1);
  }
  return (
    <View>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>
        {contador}
      </Text>  

      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>
        <Pressable style={styles.adbotao} onPress={Adiciona}>
          <Text style={styles.textoadBotao}>+</Text>
        </Pressable>
      </Text>
      
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>
        <Pressable style={styles.botao} onPress={Subtrai}>
          <Text style={styles.textoBotao}>-</Text>
        </Pressable>
      </Text>
    </View>
  );
}
