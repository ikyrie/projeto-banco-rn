import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Memo({item}) {
    return (
        <View style={style.cartao}>
            <Text style={style.titulo}>{item.titulo}</Text>
            <Text style={style.categoria}>Categoria: {item.categoria}</Text>
            <Text style={style.texto}>{item.texto}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    cartao: {
        borderRadius: 8,
        backgroundColor: "#ffffff",
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginBottom: 8,
        borderTopWidth: 5,
        borderColor: "#ff924f",
        shadowOffset: {width: 0, height: -10},
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 4,
    },
    titulo: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 4,
    },
    categoria: {
        borderRadius: 4,
        backgroundColor: "#ff924f",
        padding: 4,
        color: "#FAFAFA",
        alignSelf: "flex-start",
    },
    texto: {
        lineHeight: 28,
    }
})