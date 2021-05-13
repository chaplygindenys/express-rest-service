const DB = require('../../utils/controlDb');

const TABLE_NAME = 'Users';

  const getAll = async () => DB.getAllEntities(TABLE_NAME);

  const get = async ( id )=>{
    const user = await DB.getEntity(TABLE_NAME, id);

    if(!user) {
      return (`Cold not find a user with id: ${id}`)
    }
    return user;
  };

  const postUser = async (user) => {
    const newUser = await DB.saveEntity(TABLE_NAME, user);
    if(!newUser) {
      return ("Not Found")
    }
    return "Created";
  };




const deleteUser = async (id) => {
  if (!(await DB.removeEntity(TABLE_NAME, id))){
  return (`Cold not find a user with id: ${id}`);
  }
  return 'ok';
};

const putUser = async (id, user) => {

  const entity = await DB.putEntity(TABLE_NAME, id, user);
  if(!entity) {
    return (`Cold not find a user with id: ${id}`)
  }
  return entity;
};


module.exports = {
  getAll,
  get,
  postUser,
  putUser,
  deleteUser
};

