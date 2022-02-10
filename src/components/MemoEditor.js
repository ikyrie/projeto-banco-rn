import React, { useEffect, useState } from "react"
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { Picker } from "@react-native-picker/picker"

import { adicionaMemo } from "../services/Memos"


export default function MemoEditor({atualizaLista, notaSelecionada}) {
    useEffect(() => {
        if(notaSelecionada.id) {
            preencheModal()
        }
    },[notaSelecionada])

    const [text, setText] = useState('')
    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('');
    const [modalVisivel, setModalVisivel] = useState(false)

    function preencheModal() {
        setModalVisivel(true)
        setTitulo(notaSelecionada.titulo)
        setCategoria(notaSelecionada.categoria)
        setText(notaSelecionada.texto)
    }

    async function montaESalvaNota() {
        const umMemo = {
            titulo: titulo,
            categoria: categoria,
            texto: text
        }
        await adicionaMemo(umMemo)
        atualizaLista()
    }

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
                        <TextInput onChangeText={newTitle => setTitulo(newTitle)} placeholder='Digite um título' value={titulo}/>
                        <Text>Escolha uma categoria</Text>
                        <Picker selectedValue={categoria} onValueChange={(itemValue, itemIndex) => {setCategoria(itemValue)}}>
                            <Picker.Item label="Pessoal" value="Pessoal"/>
                            <Picker.Item label="Trabalho" value="Trabalho"/>
                            <Picker.Item label="Outros" value="Outros"/>
                        </Picker>
                        <TextInput onChangeText={newText => setText(newText)} placeholder='Digite aqui seu lembrete' value={text}/>
                        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                            <TouchableOpacity onPress={() => {montaESalvaNota();setModalVisivel(false)}}><Text>Salvar</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => {setModalVisivel(false)}}><Text>Cancelar</Text></TouchableOpacity>
                        </View>
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
      justifyContent: 'flex-end'
    },
    modal: {
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 32,
      borderTopEndRadius: 8,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
      backgroundColor: '#F5F5F5'
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