import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Cabecalho from './src/components/Cabecalho';
import { Memo } from './src/components/Memo';
import MemoEditor from './src/components/MemoEditor';
import { criaTabela, todosMemos } from './src/services/Memos';


export default function App() {

  useEffect(() => {
    criaTabela()
  },[])

  const [memos, setMemos] = useState([])

  async function restoreData() {
      const heehee = await todosMemos()
      setMemos(heehee)
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={memos}
        renderItem={(memo) => <Memo {...memo}/>}
        keyExtractor={memo => memo.id}
        ListHeaderComponent={() => <Cabecalho mostrarMemos={restoreData}/>}
        />
      <MemoEditor/>
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
  }
});
