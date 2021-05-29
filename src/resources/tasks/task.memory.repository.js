const DB = require('../../utils/controlDb');

const TABLE_NAME = 'Tasks';

const getAll = async () => DB.getAllEntities(TABLE_NAME);

const get = async  id =>{
  const task = await DB.getEntity(TABLE_NAME, id);

  if(!task) {
    return (`Cold not find a task with id: ${id}`)
  }
  return task;
};

const postTask = async (task) => {
  const newTask = await DB.saveEntity(TABLE_NAME, task);

  if(!newTask) {
    return ("Task no created")
  }
  return newTask;
}


const deleteTask = async (id) => {
  if (!(await DB.removeEntity(TABLE_NAME, id))){
    return (`Cold not find a task with id: ${id}`);
  }
  return 'ok'
};

const putTask = async (id, task) => {

  const entity = await DB.putEntity(TABLE_NAME, id, task);
  if(!entity) {
    return (undefined);
  }
  return entity;
};


module.exports = {
  getAll,
  get,
  postTask,
  putTask,
  deleteTask
};

