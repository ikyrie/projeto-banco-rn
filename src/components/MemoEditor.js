import React, { useState } from "react"
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"

export default function MemoEditor() {
    const [text, setText] = useState('')
    const [modalVisivel, setModalVisivel] = useState(false)


    return(
        <>
            <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisivel}
            onRequestClose={() => {
            setModalVisivel(false)
            }}>
            <View style={styles.centerModal}>
                <View style={styles.modal}>
                <Text style={styles.modalTitulo}>Crie uma nova nota</Text>
                <TextInput onChangeText={newText => setText(newText)} placeholder='Digite aqui algum texto'/>
                <TouchableOpacity onPress={() => {setModalVisivel(false)}}><Text>Cancelar</Text></TouchableOpacity>
                </View>
            </View>
            </Modal>
            <TouchableOpacity onPress={() => {setModalVisivel(true)}} style={styles.adicionarMemo}>
                <Text style={styles.adicionarMemoTexto}>Adicionar Memo</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    centerModal: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    modal: {
      alignSelf: 'center',
      width: 300,
      backgroundColor: '#FFFFFF',
      padding: 16,
      borderRadius: 8,
      shadowOffset: {width: 0, height: -10},
      shadowRadius: 5,
      elevation: 10,
    },
    modalTitulo: {
      fontSize: 24,
      fontWeight: '600',
      marginBottom: 8,
    },
    adicionarMemo: {
      backgroundColor: '#38ba2d',
      paddingVertical: 16,
      alignItems: 'center',
      borderRadius: 6,
    },
    adicionarMemoTexto: {
      color: '#FFFFFF',
    }
  });