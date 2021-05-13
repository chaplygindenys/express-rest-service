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
  const entity = getEntity(tableName, id);
  if (entity) {
    db[`fix${tableName}Structure`](entity);
    const index = db [tableName].indexOf(entity);
    db[tableName] = [
      ...db[tableName].slice(0, index),
      ...(db[tableName].length > index + 1
        ? db[tableName].slice(index + 1)
        : [])
    ];
  }
  return entity;
};


const putEntity = async (tableName, id, entity) => {
  const oldEntity = getEntity(tableName, id);
  if (oldEntity) {
    db[tableName][db[tableName].indexOf(oldEntity)] = { ...entity };
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