import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//npm i expo-constants
import Constants from 'expo-constants';

// import Constants from 'expo-contants';
import Exemplo1 from './src/exemplos/ex_01';
import Exemplo2 from './src/exemplos/ex_02';

import Atividada1 from './src/atividades/atv_01';
import Atividada2 from './src/atividades/atv_02';
import Atividade3 from './src/atividades/atv_03';
import Atividada4 from './src/atividades/atv_04';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividada2 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6b23cf',
    padding: 16,
    paddingTop: Constants.statusBarHeight || 16,
    //alignItems: 'center',
   // justifyContent: 'center',
  },
});
