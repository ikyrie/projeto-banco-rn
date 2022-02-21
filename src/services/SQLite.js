import * as SQLite from "expo-sqlite"

function openDatabase() {
    const db = SQLite.openDatabase("db.db")
    return db
}

export const database = openDatabase()
