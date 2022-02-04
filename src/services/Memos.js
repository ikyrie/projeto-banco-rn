import { database } from "./SQLite"

const db = database

export function criaTabela() {
    db.transaction((tx) => {
        tx.executeSql("CREATE TABLE IF NOT EXISTS " +
            "Memos " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria TEXT, texto TEXT);"
        )
    })
}

export function adicionaMemo(memo) {
    console.log('Adicionei memo')
    db.transaction((tx) => {
        tx.executeSql("INSERT INTO Memos (titulo, categoria, texto) VALUES (?,?,?);",[memo.titulo, memo.categoria, memo.texto])
    })
}

export function todosMemos() {
    console.log('Mostrei memos')
    db.transaction((tx) => {
        tx.executeSql("SELECT * FROM Memos;"),
        [],
        (tx, results) => {
            console.log(results)
        }
    })
}