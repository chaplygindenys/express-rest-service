const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

const db = {
  Users: [],
  Boards: [],
  Tasks: [],

  fixUsersStructure: () => {},
  fixBoardsStructure :() =>{},
  fixTasksStructure: () => {}
};
(() => {
  db.Users.push(new User());
  const board = new Board();
  db.Boards.push(board);
  db.Tasks.push(
    new Task ( {boardId:board.id}),
    new Task ( {boardId:board.id})

  );
})();



const getAllEntities = tableName => db[tableName].filter(entity => entity);

const getEntity = (tableName, id) => {
  const entities = db[tableName]
    .filter(entity => entity)
    .filter(entity => entity.id === id);

  if (entities.length > 1) {
    return ('THE DB DATA is Wrong!');
  }
  return entities[0];
};

const saveEntity = (tableName, entity) => {
  db[tableName].push(entity);
  return getEntity(tableName, entity.id);
};

const removeEntity = async (tableName, id) => {
  const oldEntity = getEntity(tableName, id);
  if (oldEntity) {
    db[tableName][db[tableName].indexOf(oldEntity)] = {};
  }
   if((getEntity(tableName, id)) === undefined){
     return 'Done'
   }
     return oldEntity ;


};


const putEntity = async (tableName, id, entity) => {
  const oldEntity = getEntity(tableName, id);
  if (oldEntity) {
   const oldId = {'id':id};
    db[tableName][db[tableName].indexOf(oldEntity)] = Object.assign(entity, oldId) ;
  }
  return getEntity(tableName, id);
};

module.exports = {
  getAllEntities,
  getEntity,
  saveEntity,
  removeEntity,
  putEntity
};