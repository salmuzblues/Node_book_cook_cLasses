const levelup = require('levelup');
const leveldown = require('leveldown');
// Instantiate database 
const db = levelup(leveldown('./data'))
// input data  by command 
const task = process.argv[2];
if (!task) {
  listTasks();
} else {
  addTask();
}
function addTask() {
  const key = `Task: ${Math.random().toString(32).replace('.', '')}`;
  db.put(key, task, err => { if(err) throw err; listTasks();});  
}
function listTasks() {
  db.createReadStream().on('data', (data) => {
    console.log(data.key.toString(), '=', data.value.toString());
  })
}
// First Form batch operations 
const operations = [
  {type: 'put', key: 'forename', value: 'Jorge'},
  {type: 'put', key: 'surname', value: 'Carranza'},
];
db.batch(operations, (err) => { 
  if(err) return console.error(err);
  console.log('Batch operations complete.');
});
// second form chained 
db.batch()
  .put('forename', 'Sandra')
  .put('surname', 'Griggs')
  .write(() => console.log('Batch operations complete.'));
