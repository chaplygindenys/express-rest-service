const DB = require('../../utils/controlDb');

const TABLE_NAME = 'Boards';

const getAll = async () => DB.getAllEntities(TABLE_NAME);

const get = async  id =>{
  const board= await DB.getEntity(TABLE_NAME, id);

  if(!board) {
    return (`Cold not find a board with id: ${id}`)
  }
  return board;
};

const postBoard = async (board) => DB.saveEntity(TABLE_NAME, board);



const deleteBoard= async (id) => {
  if (!(await DB.removeEntity(TABLE_NAME, id))){
    return (`Cold not find a board with id: ${id}`);
  }
  return 'ok';
};

const putBoard = async (id, board) => {

  const entity = await DB.putEntity(TABLE_NAME, id, board);
  if(!entity) {
    return (`Cold not find a board with id: ${id}`)
  }
  return entity;
};


module.exports = { deleteBoard,
  getAll,
  get,
  postBoard,
  putBoard,

};

