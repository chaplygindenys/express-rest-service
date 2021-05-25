const Users = [];

/**
 * return all Users
 * @return {Promise<*[]>}
 */
const getAll = async () => Users;

/**
 * it find in [Users] user with id : @param id
 * if it is ---> return it,
 * or throw new error to up
 * @param id
 * @return {Promise<*>}
 */
const get = async (id) => Users.find(user => user.id === id);


/**
 * push new user to [Users]
 * and return new user
 * @param user
 * @return {Promise<*>}
 */
const postUser = async (user) => {
  Users.push(user)
  return user;
};

/**
 * find user with @param id
 * make updateUser {id + user }
 * and changed userIndex to updateUser
 * return updateUser
 * @param id
 * @param userData
 * @return {Promise<*&{id}>}
 */
const putUser = async (id, userData) => {
  const userIndex = Users.findIndex(user => user.id === id);
  const updatedUser = {
    id,
    ...userData
  };
  Users.splice(userIndex, 1, updatedUser);
  return updatedUser;
}

/**
 * re saved [Users] without (user with @param id)
 * return 'User has been deleted'
 * @param id
 * @return {Promise<string>}
 */
const deleteUser = async (id) => {
  Users.filter(user => user.id !== id);
  return 'User has been deleted'
};
module.exports = { getAll, get,  postUser, putUser, deleteUser };
