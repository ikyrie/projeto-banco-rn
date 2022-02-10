import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Memo } from './src/components/Memo';
import MemoEditor from './src/components/MemoEditor';
import { criaTabela, todosMemos } from './src/services/Memos';


export default function App() {

  useEffect(() => {
    criaTabela()
    restoreData()
  },[])

  const [memos, setMemos] = useState([])
  const [notaSelecionada, setNotaSelecionada] = useState({})

  async function restoreData() {
      setMemos(await todosMemos())
  }

  function atualizaLista() {
    restoreData()
  }

  function editaMemo(item) {
    setNotaSelecionada(item)
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={memos}
        renderItem={(memo) => <Memo {...memo} editaMemo={editaMemo}/>}
        keyExtractor={memo => memo.id}
        />
      <MemoEditor atualizaLista={atualizaLista} notaSelecionada={notaSelecionada}/>
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
