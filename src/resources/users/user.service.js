const User = require('./user.model');
const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const get = id => usersRepo.get(id);
const postUser = user => usersRepo.postUser(new User(user));
const putUser = (id, user) => usersRepo.putUser(id, user);
const deleteUser = id => usersRepo.deleteUser(id);
module.exports = {
  deleteUser,
  putUser,
  postUser,
  get,
  getAll
};
