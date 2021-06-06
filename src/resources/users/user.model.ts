import { v4 as uuid } from 'uuid';

export class User {
  /**
   * assigns param id:string new  id:string
   * takes parameters and assigns them to the properties
   * of the class
    * @param id:string
   * @param name:string
   * @param login:string
   * @param password:string
   */
  id:string;

  name:string;

  login:string;

  password:string;

  constructor(
                name = 'USER',
                login = 'user',
                password = 'P@55w0rd'
              ) {
    this.id =uuid() ;
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
  static toResponse(user:undefined|{id:string|number, name:string, login:string, password:string}) {
    if(user === undefined) {
      return user;
    }
    return user;
  }



}
