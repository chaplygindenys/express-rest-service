const { v4: uuidv4 } = require('uuid');

class User {
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

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }

  static fromRequest(user) {
    const { id, name, login, password } = user;
     if (!id){
       return { id:uuidv4(), name, login, password };
     }
     return { id, name, login, password };
  }


}

module.exports = User;
