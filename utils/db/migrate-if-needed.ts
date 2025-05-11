import {SQLiteDatabase} from "expo-sqlite";

export default async function migrateDbIfNeeded(db: SQLiteDatabase) {
	const DATABASE_VERSION = 1;
	
	let currentDbVersion = (await db.getFirstAsync<{ user_version: number }>(
		"PRAGMA user_version"
	))?.user_version || 1;
	
	if (currentDbVersion >= DATABASE_VERSION) return
	
	if (currentDbVersion === 0) {
		// CREATE THE Tables
		// TODO: Create the tables
		await db.execAsync(`
            CREATE TABLE key_english (
				id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
				book INTEGER NOT NULL,
				name TEXT NOT NULL,
				testament TEXT NOT NULL CHECK (testament IN ('OT', 'NT')),
				"group" INTEGER NOT NULL
            );
		`);
		await db.execAsync(``);
		// ...
		
		// INSERT THE DATA
		// TODO: Insert the data
		await db.runAsync('');
		await db.runAsync('');
		// ...
		
		currentDbVersion = 1;
	}
	
	// if (currentDbVersion === 1) {
	// 	    Add more migrations
	// }
	
	await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}
