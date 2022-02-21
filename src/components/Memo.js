import React from "react";
import { View, Text } from "react-native";

export function Memo(props) {
    return (
        <View style={{height: 48, backgroundColor: 'red', marginBottom: 16}}>
            <Text>{props.item[1]}</Text>
        </View>
    )
}