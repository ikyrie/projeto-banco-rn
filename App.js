import { StyleSheet, SafeAreaView, FlatList, StatusBar } from 'react-native';
import { useState, useEffect } from 'react';

import { Memo } from './src/components/Memo';
import Cabecalho from './src/components/Cabecalho';
import { criaTabela, todosMemos } from './src/services/Memos';

export default function App() {

  useEffect(() => {
    criaTabela()
  },[])

  const [memos, setMemos] = useState([])

  async function restoreData() {
      const shti = await todosMemos()
      setMemos(shti)
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={memos}
        renderItem={(memo) => <Memo {...memo}/>}
        keyExtractor={memo => memo.id}
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
