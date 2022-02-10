import React from "react";
import { Button } from 'react-native';
import { adicionaMemo } from "../services/Memos";


export default function Cabecalho({ mostrarMemos }) {

    function criaNotaMock() {
        const umMemo = {
            titulo: "Um título",
            categoria: "Pessoal",
            texto: "Lorem Ipsum ou então um conteúdo com mais de uma linha, para ver se o bagulho quebra super fácil..."
        }
        adicionaMemo(umMemo)
    }

    return (
        <>
            <Button onPress={() => {storeData(text)}} title='Salvar'/>
            <Button onPress={() => {mostrarMemos()}} title='Mostrar'/>
            <Button onPress={() => {criaNotaMock()}} title='Cria Nota Mock'/>
        </>
    )
        
}