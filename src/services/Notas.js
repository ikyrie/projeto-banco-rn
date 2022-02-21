import { database } from "./SQLite"

const db = database

export function criaTabela() {
    db.transaction((tx) => {
        tx.executeSql("CREATE TABLE IF NOT EXISTS " +
            "Notas " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria TEXT, texto TEXT);"
        )
    })
}

export function adicionaNota(nota) {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("INSERT INTO Notas (titulo, categoria, texto) VALUES (?,?,?);",[nota.titulo, nota.categoria, nota.texto], (tx, results) => {
                resolve('Transação OK')
                reject('Problemas para salvar')
            })
        })

    })
}

export function atualizaNota(nota) {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("UPDATE Notas SET titulo = ?, categoria = ?, texto = ? WHERE id = ?;",[nota.titulo, nota.categoria, nota.texto, nota.id], (tx, results) => {
                resolve('Transação OK')
                reject('Problemas para salvar')
            })
        })

    })
}

export function deletaNota(nota) {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("DELETE FROM Notas WHERE id = ?;",[nota.id], (tx, results) => {
                resolve('Transação OK')
                reject('Problemas para remover')
            })
        })

    })
}

export function todasNotas() {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM Notas;", [], (tx, results) => {
                resolve(results.rows._array)
                reject('Problemas para acessar')
            })
        })
    })
}

export function filtraPorCategoria(categoria) {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM Notas WHERE categoria = ?;", [categoria], (tx, results) => {
                resolve(results.rows._array)
                reject("Problemas para acessar")
            })
        })
    })
}
