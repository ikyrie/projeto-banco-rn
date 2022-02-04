import { StyleSheet, SafeAreaView, FlatList, StatusBar } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Memo } from './src/components/Memo';
import Cabecalho from './src/components/Cabecalho';
import { criaTabela } from './src/services/Memos';

export default function App() {

  useEffect(() => {
    criaTabela()
  },[])

  const [memos, setMemos] = useState([])

  async function restoreData() {
    try {
      const chaves = await AsyncStorage.getAllKeys()
      console.log('Vetor de chaves: ' + chaves)
      const values = await AsyncStorage.multiGet(chaves)
      console.log(values)
      setMemos(values)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={memos}
        renderItem={Memo}
        keyExtractor={memo => memo[0]}
        style={{backgroundColor: "blue"}}
        ListHeaderComponent={() => <Cabecalho mostrarMemos={restoreData}/>}
        />
      <StatusBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
