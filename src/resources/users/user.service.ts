import {saveUser,getAll, getById, updateUser, removeUser } from './user.memory.repository';


 type userReturn = { id:string, name:string, login:string};





  /**
   * function to initialize method ".get all" from object "usersRepo"
   * @return {Promise<[{}]|*[]>}
   */
  export const getAllUsers = () => getAll();
  /**
   * function to initialize method ".get" from object "usersRepo" with @param id:string
   * @param id:string|number
   * @return {Promise<{id: id}|number>}
   */
  export const getUser = (id:string) => getById(id);
  /**
   *
   * make new user with @param user:{}
   * function to initialize method".postUser" from
   * object "usersRepo" with new Object
   * @param user
   * @returns {Promise<string|*>}
   */
  export const postUser = (name:string, login:string, password:string):userReturn =>saveUser(name, login, password);
  /**
   *function to initialize method".putUser" from
   * object "usersRepo" with @param id:string and user {login:string, password:string, name:string}
   * @param id
   * @param user
   * @returns {Promise<{}>}
   */
  export const putUser = (id:string,name:string, login:string, password:string) => updateUser(id,name, login, password);
  /**
   *function to initialize method".deleteUser" from
   * object "usersRepo" with @param id:string
   * @param id
   * @returns {Promise<string|string>}
   */
  export const deleteUser = (id:string) => removeUser(id);

