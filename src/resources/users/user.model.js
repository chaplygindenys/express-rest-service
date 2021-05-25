const { v4: uuidv4 } = require('uuid');

class User {
  /**
   * assigns param id:string new  id:string
   * takes parameters and assigns them to the properties
   * of the class
    * @param id:string
   * @param name:string
   * @param login:string
   * @param password:string
   */
  constructor({
                id = uuidv4(),
                name = 'USER',
                login = 'user',
                password = 'P@55w0rd'
              } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   *  /**
   * cut all method and password of the object {user}
   * @param user:{}
   * @return {{name, id, login}}
   */
  static toResponse(user) {
    if(user === undefined) {
      return user;
    }
    const { id, name, login } = user;
    return { id, name, login };
  }

  /**
   * cut all method and id of the object {user}
   * @param user
   * @return {{password, name, login}}
   */
  static fromRequest(user) {
    const {  name, login, password } = user;

     return { name, login, password };
  }


}

module.exports = User;
