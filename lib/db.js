import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ items: [] })
.write();

db.get('posts')
  .push({ id: 1, title: 'lowdb is awesome'})
  .write()

export default db;