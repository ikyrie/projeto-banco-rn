import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('')

  function storeData(value) {
    try {
      AsyncStorage.setItem('1', value)
      console.log('Valor guardado: ' + value)
    } catch (error) {
      console.log(error)
    }
  }

  async function restoreData(key) {
    try {
      const value = await AsyncStorage.getItem(key.toString())
      console.log(value)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Text>Testando</Text>
      <TextInput onChangeText={newText => setText(newText)} placeholder='Digite aqui algum texto'/>
      <Button onPress={() => {storeData(text)}} title='Salvar'/>
      <Button onPress={() => {restoreData('1')}} title='Mostrar'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
