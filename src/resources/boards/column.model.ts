import { v4 as uuid } from 'uuid';


export class Column {
  id:string|number;
  
  title:string;
  
  order:number;

  /**
   * assigns param id:string new  id:string
   * takes parameters and assigns them to the properties
   * of the class
    * @param id
   * @param title
   * @param order
   */
  constructor({

                title = 'Default',
                order = 1
              } ) {
    this.id = uuid();
    this.title = title;
    this.order = order;
  }
}
