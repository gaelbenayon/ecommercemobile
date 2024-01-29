import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('ecommerce.db');

export const initDb = () => {
    const promise = new Promise((resolve,reject) => {
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY_KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL);',
            [],
            () => resolve(),
            (_,error) => reject(tx,error)
            )
        })
    })
    return promise
}

export const insertDbSession = ({localId,email,token}) => {
    const promise = new Promise((resolve,reject) => {
        db.transaction(tx => {
            tx.executeSql('INSERT INTO sessions (localId, email, token) VALUES (?, ?, ?);',
            [localId,email,token],
            (_,result) => resolve(result),
            (_,error) => reject(error)
            )
        })
    })
    return promise
}

export const fetchDbSession = () => {
    const promise = new Promise((resolve,reject) => {
        db.transaction(tx => {
            tx.executeSql(
            'SELECT * FROM sessions;',
            [],
            (_,result) => resolve(result),
            (_,error) => reject(error)
            )
        })
    })
    return promise
}

export const deleteDbSession = (localId) => {
    const promise = new Promise((resolve, reject)=>{
        db.transaction(tx=>{
            tx.executeSql(
                'DELETE FROM sessions WHERE localId = ?',
                [localId],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}