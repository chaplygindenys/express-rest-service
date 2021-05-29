import { v4 as uuid } from 'uuid';

type taskParam = {

  title:string,
  order:number,
  description:string,
  boardId:string|null,
  userId:string|null,
  columnId:string|null
};


 export class Task {
   id:string|number ;

   title:string;

   order:number;

   description:string;

   boardId:string|null;

   userId:string|null;

   columnId:string|null;



  /**
   * assigns param id:string new  id:string
   * takes parameters and assigns them to the properties
   * of the class
   * @param id
   * @param title
   * @param boardId
   * @param order
   * @param description
   * @param userId
   * @param columnId
   */
  constructor({
                title ='Autotest task',
                order= 0,
                description = 'Lorem ipsum',
                userId = null,
                boardId = null,
                columnId = null
              }:taskParam) {
    this.id = uuid();
    this.title = title;
    this.boardId = boardId;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.columnId = columnId
  }
}


