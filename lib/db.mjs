import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.mjs';

const adapter = new FileSync('db.mjson');
const db = low(adapter);

db.defaults({ items: [] })
.write();


export default db;