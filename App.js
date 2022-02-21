import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { Nota } from "./src/componentes/Nota";
import NotaEditor from "./src/componentes/NotaEditor";
import { criaTabela, todasNotas, filtraPorCategoria } from "./src/services/Notas";


export default function App() {

	useEffect(() => {
		criaTabela()
		mostraTodasNotas()
	},[])

	const [notas, setNotas] = useState([])
	const [notaSelecionada, setNotaSelecionada] = useState({})
	const [categoria, setCategoria] = useState("Todos")

	async function mostraTodasNotas() {
		setNotas(await todasNotas())
	}

	function atualizaLista() {
		mostraTodasNotas()
	}

	async function filtraLista(item) {
		if(item == "Todos") {
			mostraTodasNotas()
		} else {
			setNotas(await filtraPorCategoria(item))
		}
	}

	function editaNota(item) {
		setNotaSelecionada(item)
	}

	return (
		<SafeAreaView style={estilos.container}>
			<FlatList
				data={notas}
				renderItem={(nota) => <Nota {...nota} editaNota={editaNota}/>}
				keyExtractor={nota => nota.id}
				ListHeaderComponent={() => {return (
					<View style={estilos.picker}>
						<Picker selectedValue={categoria} onValueChange={(itemValue, itemIndex) => {setCategoria(itemValue); filtraLista(itemValue)}}>
							<Picker.Item label="Todos" value="Todos"/>
							<Picker.Item label="Pessoal" value="Pessoal"/>
							<Picker.Item label="Trabalho" value="Trabalho"/>
							<Picker.Item label="Outros" value="Outros"/>
						</Picker>
					</View>
				)}}
				showsVerticalScrollIndicator={false}
				/>
			<NotaEditor atualizaLista={atualizaLista} notaSelecionada={notaSelecionada} editaNota={editaNota}/>
			<StatusBar/>
		</SafeAreaView>
	);
}

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "stretch",
		justifyContent: "flex-start",
	},
    titulo: {
        fontSize: 24,
        fontWeight: "600",
        marginBottom: 12,
    },
	picker: {
		borderWidth: 1,
		borderRadius: 5,
		borderColor: "#EEEEEE",
		marginHorizontal: 16,
		marginTop: 16,
		marginBottom: 12,
	}
});
