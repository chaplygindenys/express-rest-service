import { v4 as uuid } from 'uuid';
import {Column} from'./column.model';

type columnsType = {id:string|number, title:string, order:number}[];
export class Board {
  id:string|number;

  title:string;

  columns:columnsType;
  
  
  /**
   * assigns param id:string new  id:string
   * takes parameters and assigns them to the properties
   * of the class
   * @param id:string
   * @param title:string
   * @param columns:[{string,string,number}]
   */
  constructor(

                title = 'BOARD TITLE',
                columns = [{
                  title: 'columnTitle',
                  order: 0
                }]
             ) {
    this.id = uuid();
    this.title = title;
    this.columns = columns.map(column => new Column(column));

  };
}
