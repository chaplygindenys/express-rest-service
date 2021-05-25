const User = require('./user.model');
const usersRepo = require('./user.memory.repository');
/**
 * function to initialize method ".get all" from object "usersRepo"
 * @return {Promise<Users[]|*[]>}
 */
const getAll = () => usersRepo.getAll();
/**
 * function to initialize method ".get" from object "usersRepo" with @param id:string
 * @param id:string|number
 * @return {Promise<{id: id}|number>}
 */
const get = id => usersRepo.get(id);
/**
 *
 * make new user with @param user:{}
 * function to initialize method".postUser" from
 * object "usersRepo" with new Object
 * @param user
 * @returns {Promise<string|*>}
 */
const postUser = user => usersRepo.postUser(new User(user));
/**
 *function to initialize method".putUser" from
 * object "usersRepo" with @param id:string and user {login:string, password:string, name:string}
 * @param id
 * @param user
 * @returns {Promise<*|Chai.Assertion>}
 */
const putUser = (id, user) => usersRepo.putUser(id, user);
/**
 *function to initialize method".deleteUser" from
 * object "usersRepo" with @param id:string
 * @param id
 * @returns {Promise<string|string>}
 */
const deleteUser = id => usersRepo.deleteUser(id);
module.exports = {
  deleteUser,
  putUser,
  postUser,
  get,
  getAll
};
