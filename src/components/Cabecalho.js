import React from "react";
import { Button } from 'react-native';


export default function Cabecalho({ mostrarMemos }) {

    return (
        <>
            <Button onPress={() => {mostrarMemos()}} title='Mostrar'/>
        </>
    )
        
}