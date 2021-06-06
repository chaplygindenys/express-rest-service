import  {User}   from './user.model';


type UserWithOutPassword = { id:string | number, name:string, login:string,};
type User1 = { id:string | number, name:string, login:string, password:string};
 const Users:User1[] = [] ;
  Users.push(new User);


  /**
   * return all Users
   * @return Users:Array<string|number>
   */
  export const getAll= ():User1[]=> Users;

/**
 * @property  it find in [Users] user with id : @param id
 * if it is ---> return it,
 * or throw new error to up
 * @param id
 * @return user
 */
export const getById = (id:string):User1|undefined =>Users.find(user => user.id === id);





/**
 * @property push new user to [Users] and return new user
 * @param name
 * @param login
 * @param password
 * @return { id:string, name:string, login:string}
 */
 export const saveUser = (name:string, login:string, password:string)=>{
    const user = new User(name, login, password);
    Users.push(user);
    return {id:user.id, name:user.name, login: user.login};
  };

/**
 *  find user with @param id
 * make updateUser {id + user }
 * and changed userIndex to updateUser
 * return updateUser
 * @param id
 * @param name
 * @param login
 * @param password
 * @return userReturn
 */
export const updateUser = (id:string|number, name:string, login:string, password:string)=>{

    const userIndex:string|number = Users.findIndex(user => user.id === id);

    const updatedUser:User1 = { id, name, login, password };
    const userReturn:UserWithOutPassword = { id, name, login,};
    Users.splice(userIndex, 1, updatedUser);

    return userReturn ;
  }

  /**
   * re saved [Users] without (user with @param id)
   * return 'User has been deleted'
   * @param id
   * @return {Promise<string>}
   */
  export const removeUser=(id:string)=>{
    Users.filter(user => user.id !== id);
    return 'User has been deleted'
  };

