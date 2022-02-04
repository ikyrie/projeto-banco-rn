import React, { useState } from "react";
import { Text, TextInput, Button } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage'
import { adicionaMemo, todosMemos } from "../services/Memos";

export default function Cabecalho({ mostrarMemos }) {
    const [text, setText] = useState('')
    
    async function storeData(value) {
        try {
            const chave = await criaNovoId()
            await AsyncStorage.setItem(chave.toString(), value)
            console.log('Valor guardado: ' + value + '\nChave: ' + chave)
        } catch (error) {
            console.log(error)
        }
    }
    
    async function criaNovoId() {
        const numeroDeEntradas = await AsyncStorage.getAllKeys()
        if(numeroDeEntradas.length <= 0) {
            return 1
        }
        return numeroDeEntradas.length + 1
    }

    function criaNotaMock() {
        const umMemo = {
            titulo: "Um título",
            categoria: "Pessoal",
            texto: "Lorem Ipsum"
        }
        adicionaMemo(umMemo)
    }

    function notas() {
        todosMemos()
    }
    
    return (
        <>
            <Text>Crie uma nova nota</Text>
            <TextInput onChangeText={newText => setText(newText)} placeholder='Digite aqui algum texto'/>
            <Button onPress={() => {storeData(text)}} title='Salvar'/>
            <Button onPress={() => {mostrarMemos()}} title='Mostrar'/>
            <Button onPress={() => {AsyncStorage.clear()}} title='Limpa AsyncStorage'/>
            <Button onPress={() => {criaNotaMock()}} title='Cria Nota Mock'/>
            <Button onPress={() => {notas()}} title='Mostra as notas no console'/>
        </>
    )
        
}